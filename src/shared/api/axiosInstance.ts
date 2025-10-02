import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useUserStore } from '@/entities/user/index';
import { useGlobalErrorStore } from '../store';
import { ENABLE_API_METRICS, recordApiMetric } from './apiMetrics';

const instances = new Map<string, AxiosInstance>();

const IGNORE_METRIC_URLS = ['/api/v1/auth/token/reissue'];
const shouldIgnore = (url?: string) => !!url && IGNORE_METRIC_URLS.some((u) => url.includes(u));
declare module 'axios' {
  // 내부 요청 설정 타입에 커스텀 필드 추가
  export interface InternalAxiosRequestConfig {
    startTimeMs?: number;
    reqKey?: string;
    isRetried?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    axiosRequestHeader: (InternalAxiosRequestConfig['headers'] & { authRequired?: boolean }) | any;
  }
}

export default function axiosInstance(apiUrl: string | undefined): AxiosInstance {
  if (apiUrl === undefined) {
    throw new Error('API URL not exist');
  }

  if (instances.has(apiUrl)) {
    return instances.get(apiUrl)!;
  }

  const instance = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
  });

  instance.interceptors.response.use(
    (response) => {
      // 응답 성공 시 측정 기록
      try {
        if (ENABLE_API_METRICS && !shouldIgnore(response.config?.url)) {
          const cfg = response.config as InternalAxiosRequestConfig;
          const start = cfg.startTimeMs ?? 0;
          const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
          const dur = start ? now - start : 0;
          const method = String(response.config.method || 'GET').toUpperCase();
          const key = cfg.reqKey || `${method} ${response.config.url}`;
          recordApiMetric(key, dur, false);
        }
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.debug('[metrics] response ok, record skipped', e);
        }
      }
      return response;
    },
    async (error) => {
      // 응답 실패 시에도 측정 기록
      try {
        const cfg = (error.config || {}) as InternalAxiosRequestConfig;
        if (ENABLE_API_METRICS && !shouldIgnore(cfg?.url)) {
          const start = cfg.startTimeMs ?? 0;
          const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
          const dur = start ? now - start : 0;
          const method = String(cfg.method || 'GET').toUpperCase();
          const key = cfg.reqKey || `${method} ${cfg.url}`;
          recordApiMetric(key, dur, true);
        }
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.debug('[metrics] response err, record skipped', e);
        }
      }

      switch (error.response?.status) {
        case 400: {
          useGlobalErrorStore.getState().setGlobalError(400, error.response?.data);
          break;
        }
        case 401: {
          // refresh-token 자체가 만료된 경우에 401을 받으면, 다시 시도해도 계속 만료된 상태이기에
          // 무한루프 방지를 위해서 해당 줄에서 체크 후 error처리
          const { accessToken } = useUserStore.getState();

          if (error.config.url === '/api/v1/auth/token/reissue') {
            useUserStore.getState().setLoggedOut();
            return Promise.reject(error);
          }

          if (!error.config.isRetried) {
            // refresh token은 있는데, 새로고침 등으로 AccessToken 없는 경우 재 발급 로직
            const originRequest: InternalAxiosRequestConfig & { isRetried: boolean } = {
              ...(error.config as InternalAxiosRequestConfig),
              isRetried: true,
            };

            try {
              if (accessToken || accessToken.length > 0) {
                originRequest.headers = originRequest.headers || {};
                originRequest.headers.Authorization = `Bearer ${accessToken}`;
                return await axios(originRequest);
              }
            } catch (axiosError) {
              // TODO logout 관련 로직 추가 작성 필요 : Authorization 헤더 초기화
              useUserStore.getState().setLoggedOut();
              return Promise.reject(axiosError);
            }
          }
          break;
        }
        case 404: {
          useGlobalErrorStore.getState().setGlobalError(404, error.response?.data);
          break;
        }
        case 500: {
          useGlobalErrorStore.getState().setGlobalError(500, error.response?.data);
          break;
        }
        default: {
          if (!error.response?.status) {
            // TODO : 오류 상태도 없는 경우 어떻게 처리할지? 홈으로? 논의 필요.
          } else {
            useGlobalErrorStore
              .getState()
              .setGlobalError(error.response.status, error.response.data);
            // TODO : 지정되지 않은 오류일 때에도 어떻게 할지 논의 필요.
          }
          break;
        }
      }

      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use((config) => {
    const { accessToken } = useUserStore.getState();
    const origin = { ...(config as InternalAxiosRequestConfig) };

    if (ENABLE_API_METRICS && !shouldIgnore(origin.url)) {
      origin.startTimeMs = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const method = (origin.method || 'GET').toString().toUpperCase();
      origin.reqKey = `${method} ${origin.url}`;
    }

    if (!accessToken || accessToken.length === 0) {
      origin.headers = origin.headers || {};
      origin.headers.Authorization = '';
    } else if (origin.headers?.authRequired !== false) {
      origin.headers = origin.headers || {};
      origin.headers.Authorization = `Bearer ${accessToken}`;
    }
    return origin;
  });

  instances.set(apiUrl, instance);
  return instance;
}

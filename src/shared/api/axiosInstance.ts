import axios, { AxiosInstance } from 'axios';
import { clearSession, getAccessToken, refreshAccessToken } from '../lib/auth/authSession';
import { useGlobalErrorStore } from '../lib';

const instances = new Map<string, AxiosInstance>();

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
    (response) => response,
    async (error) => {
      const { response, config: originRequest } = error;

      switch (response?.status) {
        case 400:
          useGlobalErrorStore.getState().setGlobalError(400, error.response?.data);
          break;

        case 401:
          // refresh-token 자체가 만료된 경우에 401을 받으면, 다시 시도해도 계속 만료된 상태이기에
          // 무한루프 방지를 위해서 해당 줄에서 체크 후 error처리
          if (originRequest.url === '/api/v1/auth/token/reissue') {
            clearSession();
            return Promise.reject(error);
          }

          if (!originRequest._retry) {
            originRequest._retry = true;
            try {
              return await refreshAccessToken(originRequest);
            } catch (err) {
              return Promise.reject(err);
            }
          }
          break;

        case 404:
          useGlobalErrorStore.getState().setGlobalError(404, error.response?.data);
          break;

        case 500:
          useGlobalErrorStore.getState().setGlobalError(500, error.response?.data);
          break;

        default:
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

      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use((config) => {
    let accessToken = getAccessToken();

    const origin = { ...config };

    if (!accessToken || accessToken.length === 0) {
      origin.headers.Authorization = '';
    } else if (origin.headers.authRequired !== false) {
      origin.headers.Authorization = `Bearer ${accessToken}`;
    }
    return origin;
  });

  instances.set(apiUrl, instance);

  return instance;
}

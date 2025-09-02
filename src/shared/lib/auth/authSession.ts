import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserStore } from '@/entities/user';
import { getCookie, setCookie, deleteCookie } from '../../lib/cookieUtils';

// accessToken 가져오기 (쿠키 우선, 없으면 store fallback)
export function getAccessToken(): string | null {
  const cookieToken = getCookie('Access-Token');
  if (cookieToken) return cookieToken;
  return useUserStore.getState().accessToken;
}

// accessToken 저장 (store + cookie 동기화)
export function setAccessToken(token: string, maxAgeSec: number = 60 * 120) {
  useUserStore.getState().setAccessToken(token);
  setCookie('Access-Token', token, maxAgeSec);
}

// 로그아웃 처리 (store 초기화 + cookie 삭제)
export function clearSession() {
  useUserStore.getState().setLoggedOut();
  deleteCookie('Access-Token');
}

// refresh 전용 axios 인스턴스
const refreshClient: AxiosInstance = axios.create({
  withCredentials: true,
});

let tokenRefreshPromise: Promise<string> | null = null;

// refresh-token으로 access-token 갱신 + 중복 호출 방지
export async function refreshAccessToken(
  originRequest: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  if (!tokenRefreshPromise) {
    tokenRefreshPromise = (async () => {
      try {
        const res = await refreshClient.post('/api/v1/auth/token/reissue');
        const newAccessToken: string = res.data.accessToken;

        setAccessToken(newAccessToken);
        return newAccessToken;
      } catch (error) {
        clearSession();
        throw error;
      } finally {
        // refresh 끝나고 잠깐 딜레이 후 초기화 → race 완화
        setTimeout(() => {
          tokenRefreshPromise = null;
        }, 50);
      }
    })();
  }

  const newToken = await tokenRefreshPromise;

  originRequest.headers = {
    ...(originRequest.headers || {}),
    Authorization: `Bearer ${newToken}`,
  };

  return axios(originRequest);
}

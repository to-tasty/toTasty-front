import axiosInstance from '@/shared/api/axiosInstance';
import { useUserStore } from '@/entities/user/index';

// "axios 요청에 자동으로 accessToken을 붙여주는 준비 작업을 app 레이어에서 수행한다."
export function registerAxiosInterceptors() {
  const api = axiosInstance(process.env.NEXT_PUBLIC_API_URL);

  api.interceptors.request.use((config) => {
    const token = useUserStore.getState().accessToken;

    if (token && config.headers) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  });
}

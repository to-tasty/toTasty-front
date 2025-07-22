import axiosInstance from '@/shared/api/axiosInstance';
import useUserStore from '@/entities/user/model/hooks/useUserStore';

export default async function useRefreshAccessToken() {
  try {
    const api = axiosInstance(process.env.NEXT_PUBLIC_API_URL);

    const res = await api.post('/api/v1/auth/token/reissue', null, {
      withCredentials: true,
    });

    const { accessToken, user } = res.data;

    useUserStore.getState().setAccessToken(accessToken);
    useUserStore.getState().logIn(user);
  } catch (error) {
    useUserStore.getState().clearAccessToken();
    useUserStore.getState().logOut();
  }
}

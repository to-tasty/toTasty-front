import { postApi } from '@/shared/api/axiosApis';
import useUserStore from '@/entities/user/model/hooks/useUserStore';
import type { ReissueResponse } from '../types';

export default async function useRefreshAccessToken() {
  try {
    console.log('[DEBUG] reissue 요청 직전');

    const data = await postApi<ReissueResponse>(
      '/api/v1/auth/token/reissue',
      {},
      { withCredentials: true },
    );

    if (!data) throw new Error('No data from reissue');

    // 이제 `user` 의 타입이 User 이므로 안전하게 넘길 수 있습니다
    const { accessToken, user } = data;

    useUserStore.getState().setAccessToken(accessToken);
    useUserStore.getState().logIn(user);
    console.log('[DEBUG] reissue 응답:', data);
  } catch (error) {
    console.error('[DEBUG] reissue 실패:', error);
    useUserStore.getState().clearAccessToken();
    useUserStore.getState().logOut();
  }
}

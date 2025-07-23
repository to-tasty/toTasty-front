// src/features/auth/hooks/useRefreshAccessToken.ts
import { postApi } from '@/shared/api/axiosApis';
import useUserStore from '@/entities/user/model/hooks/useUserStore';
import type { UserState } from '@/entities/user/model/types';

export default async function useRefreshAccessToken() {
  try {
    console.log('[DEBUG] reissue 요청 직전');

    // 2) postApi 호출: 마지막에 ''(빈 문자열)만 추가
    const data = await postApi<UserState>(
      '/api/v1/auth/token/reissue',
      {},
      { withCredentials: true },
      '',
    );

    if (!data) throw new Error('No data from reissue');

    const { accessToken, user } = data;

    // 3) zustand에 저장
    useUserStore.getState().setAccessToken(accessToken);
    useUserStore.getState().logIn(user);

    console.log('[DEBUG] reissue 응답:', data);
  } catch (error) {
    console.error('[DEBUG] reissue 실패:', error);
    useUserStore.getState().clearAccessToken();
    useUserStore.getState().logOut();
  }
}

import { getApi } from '@/shared/api/axiosApis';
import { LoginResponse } from './types';

export async function loginWithKakao(code: string): Promise<LoginResponse | null> {
  const headers = {
    'Content-Type': 'application/json',
  };

  return getApi<LoginResponse>('/api/v1/auth/login/dev', { code }, headers, ''); // apiUrl value에 '' 추가
}

import { getApi } from '@/shared/api/axiosApis';
import { User } from '@/entities/user';

export async function loginWithKakao(code: string): Promise<User | null> {
  const headers = {
    'Content-Type': 'application/json',
  };

  return getApi<User>('/api/v1/auth/login', { code }, headers);
}

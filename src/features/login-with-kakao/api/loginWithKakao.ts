import { getApi } from '@/shared/api/axiosApis';
import { User } from '@/entities/user';

export async function loginWithKakao(code: string): Promise<User | null> {
  const headers = {
    'Content-Type': 'application/json',
  };

  return getApi<User>('/auth/login', { code }, headers);
}

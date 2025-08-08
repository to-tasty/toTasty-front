import { getApi } from '@/shared/api/axiosApis';

export default async function logout(): Promise<{} | null> {
  return getApi<any>(`/api/v1/auth/logout`);
}

import { postApi } from '@/shared/api';
import { ReissueResponse } from '../../user/model/types';

export default async function getAccessToken() {
  return postApi<ReissueResponse>('/api/v1/auth/token/reissue', {});
}

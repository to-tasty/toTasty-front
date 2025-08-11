import { getApi } from '@/shared/api/axiosApis';
import { TastingList } from '@/entities/tasting-list/model/types';

export default async function getTastingList(meetingId: number): Promise<TastingList | null> {
  return getApi<TastingList>(`/api/v1/tasting-list/${meetingId}`);
}

import { getApi } from '@/shared';
import { MeetingFilters, MeetingCardInfo } from '../model/types';

export default async function getMeetingList(
  filter: MeetingFilters,
): Promise<MeetingCardInfo[] | null> {
  return getApi('/api/v1/meetings', { params: filter });
}

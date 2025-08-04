import { getApi } from '@/shared';
import { MeetingFilters, MeetingCardInfo } from '../model/types';

export default async function getMeetingList(
  filter: MeetingFilters,
): Promise<MeetingCardInfo[] | null> {
  const res = await getApi<{ content: MeetingCardInfo[] }>('/api/v1/meetings', filter);
  return res ? res.content : null;
}

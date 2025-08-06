import { getApi } from '@/shared';
import { HomeMeetingCard } from '../model/types';

export default async function getPopularMeetings(): Promise<HomeMeetingCard[] | null> {
  const res = await getApi<{ content: HomeMeetingCard[] }>('/api/v1/meetings?sort=POPULARITY_WISH');
  return res ? res.content : null;
}

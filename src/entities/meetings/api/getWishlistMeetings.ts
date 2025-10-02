import { getApi } from '@/shared/api';
import { MeetingCardInfo } from '../model/types';

export default async function getWishlistMeetings(): Promise<MeetingCardInfo[]> {
  const res = await getApi<{ content: MeetingCardInfo[] }>('/api/v1/wishlist', {
    page: 1,
    size: 10,
  });
  return res?.content ?? [];
}

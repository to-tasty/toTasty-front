import { getApi } from '@/shared';
import { MeetingList } from '@/entities/meetings/model/types';

export default async function getWishlist(): Promise<MeetingList[] | null> {
  const res = await getApi<{ content: MeetingList[] }>('/api/v1/wishlist');
  return res ? res.content : null;
}

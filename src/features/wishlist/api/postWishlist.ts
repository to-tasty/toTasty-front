import { postApi } from '@/shared/api';

export default async function postWishlist(meetingId: number): Promise<void | null> {
  return postApi<void>(`/api/v1/wishlist/${meetingId}`, {});
}

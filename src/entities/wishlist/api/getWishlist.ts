import { getApi } from '@/shared';
import { Wishlist } from '../model/types';

export default async function getWishlist(): Promise<Wishlist[] | null> {
  const res = await getApi<{ content: Wishlist[] }>('/api/v1/wishlist');
  return res ? res.content : null;
}

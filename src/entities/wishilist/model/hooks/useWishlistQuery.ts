import { useQuery, UseQueryResult } from '@tanstack/react-query';
import wishlistKeys from '../wishlist.keys';
import { Wishlist } from '../types';

export default function useWishlistQuery(): UseQueryResult<Wishlist[] | null, Error> {
  return useQuery(wishlistKeys.list());
}

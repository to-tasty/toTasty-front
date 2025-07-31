import { useQuery, UseQueryResult } from '@tanstack/react-query';
import wishlistKeys from '../wishlist.keys';
import { MeetingList } from '@/entities/meetings/model/types';

export default function useWishlistQuery(): UseQueryResult<MeetingList[] | null, Error> {
  return useQuery(wishlistKeys.list());
}

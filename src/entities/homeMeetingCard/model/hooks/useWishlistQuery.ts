import { useQuery, UseQueryResult } from '@tanstack/react-query';
import homeMeetingCardKeys from '../homeMeetingCard.keys';
import { HomeMeetingCard } from '../types';

export default function useWishlistMeetingsQuery(): UseQueryResult<HomeMeetingCard[] | null> {
  return useQuery(homeMeetingCardKeys.wishlist());
}

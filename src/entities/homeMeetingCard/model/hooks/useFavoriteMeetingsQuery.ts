import { useQuery, UseQueryResult } from '@tanstack/react-query';
import homeMeetingCardKeys from '../homeMeetingCard.keys';
import { HomeMeetingCard } from '../types';

export default function useFavoriteMeetingsQuery(
  interests: string[],
): UseQueryResult<HomeMeetingCard[] | null> {
  return useQuery(homeMeetingCardKeys.favorite(interests));
}

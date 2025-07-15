import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchTastingList } from '@/entities/TastingList/api/fetchTastingList';

export function useTastingListQuery(meetingId: number): UseQueryResult<any, Error> {
  return useQuery({
    queryKey: ['tasting-list'],
    queryFn: () => fetchTastingList(meetingId),
  });
}

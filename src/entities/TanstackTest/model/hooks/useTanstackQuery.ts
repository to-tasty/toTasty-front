import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchTanstack } from '@/entities/TanstackTest/api/fetchTanstack';

export function useTanstackQuery(): UseQueryResult<any, Error> {
  return useQuery({
    queryKey: ['tanstackRepo'],
    queryFn: fetchTanstack,
  });
}

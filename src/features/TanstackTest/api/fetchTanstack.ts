import { useQuery, UseQueryResult } from '@tanstack/react-query';

async function fetchTanstack(): Promise<any> {
  const response = await fetch('https://api.github.com/repos/TanStack/query');
  if (!response.ok) {
    throw new Error('tanstack fetch error');
  }
  return response.json();
}

export function useTanstackQuery(): UseQueryResult<any, Error> {
  return useQuery({
    queryKey: ['repoData', 'tanstack'],
    queryFn: fetchTanstack,
  });
}

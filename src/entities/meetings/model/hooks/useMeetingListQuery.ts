import { useInfiniteQuery, InfiniteQueryObserverResult, InfiniteData } from '@tanstack/react-query';
import { MeetingFilters, MeetingListInfo, PolicyOverrides } from '../../types';
import meetingKeys from '../meeting.keys';
import QueryPolicies from '../query.policies';

export default function useMeetingListQuery(
  filter: MeetingFilters,
  overrides?: PolicyOverrides,
): InfiniteQueryObserverResult<InfiniteData<MeetingListInfo>> {
  const p = QueryPolicies.list(overrides);

  return useInfiniteQuery<MeetingListInfo>({
    ...meetingKeys.list(filter),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.sliceInfo.hasNext ? pages.length + 1 : undefined,
    staleTime: p.staleTime,
    refetchOnWindowFocus: p.refetchOnWindowFocus,
    refetchOnReconnect: p.refetchOnReconnect,
    refetchInterval: p.refetchInterval,
    refetchIntervalInBackground: p.refetchIntervalInBackground,
  });
}

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MeetingDetailInfo, PolicyOverrides } from '../../types';
import meetingKeys from '../meeting.keys';
import QueryPolicies from '../query.policies';

export default function useMeetingDetailQuery(
  meetingId: number,
  opts?: { hotByUi?: boolean } & PolicyOverrides,
): UseQueryResult<MeetingDetailInfo | null, Error> {
  const p = QueryPolicies.detail(opts);

  return useQuery({
    ...meetingKeys.detail(meetingId),
    staleTime: p.staleTime,
    refetchOnWindowFocus: p.refetchOnWindowFocus,
    refetchOnReconnect: p.refetchOnReconnect,
    refetchInterval: (q: { state: { data?: MeetingDetailInfo | null } }) =>
      QueryPolicies.detailInterval(q.state.data ?? undefined, opts?.hotByUi),
    refetchIntervalInBackground: p.refetchIntervalInBackground,
  });
}

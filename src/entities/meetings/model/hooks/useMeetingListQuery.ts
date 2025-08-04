import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MeetingFilters, MeetingCardInfo } from '../types';
import meetingKeys from '../meeting.keys';

export default function useMeetingListQuery(
  filter: MeetingFilters,
): UseQueryResult<MeetingCardInfo[] | null, Error> {
  return useQuery(meetingKeys.list(filter));
}

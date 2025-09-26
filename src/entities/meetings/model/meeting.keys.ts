import { createQueryKeys } from '@lukemorales/query-key-factory';
import { MeetingFilters, MeetingListParams } from './types';
import getMeetingList from '../api/getMeetingList';
import getMeetingDetail from '../api/getMeetingDetail';

const meetingKeys = createQueryKeys('meetings', {
  all: null,
  list: (filter: MeetingFilters) => ({
    queryKey: ['list', filter] as const,
    queryFn: ({ pageParam = 1 }: MeetingListParams) => getMeetingList(filter, pageParam),
  }),
  detail: (meetingId: number) => ({
    queryKey: ['detail', meetingId] as const,
    queryFn: () => getMeetingDetail(meetingId),
  }),
});
export default meetingKeys;

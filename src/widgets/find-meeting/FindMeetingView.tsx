'use client';

import { useMeetingListQuery, MeetingFilters } from '@/entities/meetings/index';
import FindMeetingPanel from './ui/FindMeetingPanel';
import FindMeetingFilters from './ui/FindMeetingFilterBtns';
import FindMeetingFilterCalendar from './ui/FindMeetingFilterCalendar';
import FindMeetingRegionSelector from './ui/FindMeetingRegionSelector';
import FindMeetingCardRow from './ui/FindMeetingCardRow';

// import { useGlobalErrorStore } from '@/shared';
// import { useShallow } from 'zustand/shallow';

export default function FindMeetingView() {
  const filter: MeetingFilters = { sort: 'latest' };
  const { isPending, data } = useMeetingListQuery(filter);
  // const { status, errorData } = useGlobalErrorStore(
  //   useShallow((state) => ({ status: state.status, errorData: state.errorData })),
  // );

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="w-[1000px] mx-auto px-0.5">
      <div className="flex mt-6">
        <FindMeetingPanel />
      </div>
      <div className="flex mt-8 py-4 border-b-1">
        <FindMeetingFilters />
      </div>
      <div className="flex mt-4">
        <FindMeetingRegionSelector />
        <FindMeetingFilterCalendar />
      </div>
      <div className="flex mt-6">
        <FindMeetingCardRow meetingCardList={data} />
      </div>
    </div>
  );
}

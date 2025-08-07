'use client';

import { useEffect } from 'react';
import { useMeetingListQuery, MeetingListInfo } from '@/entities/meetings/index';
import { Skeleton } from '@/shared';
import { useInView } from 'react-intersection-observer';
import FindMeetingCardRow from './ui/FindMeetingCardRow';
import useMeetingListStore from './model/hooks/useMeetingListStore';
import useFilterStore from './model/hooks/useFilterStore';

export default function FindMeetingList() {
  const meetings = useMeetingListStore((state) => state.meetingListInfo);
  const setMeetings = useMeetingListStore((state) => state.setMeetings);

  const filters = useFilterStore((state) => state.filters);

  const { data, fetchNextPage, isPending } = useMeetingListQuery(filters);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (data) {
      const combinedMeetingInfo = data.pages.reduce(
        (accumulator: MeetingListInfo, currentPage: MeetingListInfo) => ({
          ...accumulator,
          content: [...accumulator.content, ...currentPage.content],
          sliceInfo: currentPage.sliceInfo,
        }),
      );
      setMeetings(combinedMeetingInfo);
    }
  }, [data, setMeetings]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending) {
    return <Skeleton className="h-[1020px] w-full rounded-xl bg-gray-020" />;
  }

  return (
    <div className="flex flex-col mb-8">
      <FindMeetingCardRow meetingCardList={meetings?.content} />
      <div ref={ref} />
    </div>
  );
}

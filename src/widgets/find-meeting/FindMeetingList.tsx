'use client';

import { useEffect } from 'react';
import { useMeetingListQuery } from '@/entities/meetings/index';
import FindMeetingCardRow from './ui/FindMeetingCardRow';
import { Skeleton } from '@/shared';
import useMeetingListStore from './model/hooks/useMeetingListStore';
import useFilterStore from './model/hooks/useFilterStore';

export default function FindMeetingList() {
  const meetings = useMeetingListStore((state) => state.meetingList);
  const setMeetings = useMeetingListStore((state) => state.setMeetings);

  const filters = useFilterStore((state) => state.filters);

  const { isPending, isSuccess, data } = useMeetingListQuery(filters);

  useEffect(() => {
    if (isSuccess) {
      console.log(filters);
      setMeetings(data);
    }
  }, [isSuccess, data]);

  if (isPending) {
    return <Skeleton className="h-[1020px] w-full rounded-xl bg-gray-020" />;
  }

  return <FindMeetingCardRow meetingCardList={meetings} />;
}

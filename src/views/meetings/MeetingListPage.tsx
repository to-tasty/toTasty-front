'use client';

import { useEffect, useMemo } from 'react';
import { useMeetingListQuery, useFilterStore } from '@/entities/meetings';
import { Skeleton } from '@/shared';
import { useInView } from 'react-intersection-observer';
import { MeetingCardList, FindMeetingHeader } from '@/widgets';

export default function MeetingListPage() {
  const filters = useFilterStore((state) => state.filters);
  const { data, fetchNextPage, isPending } = useMeetingListQuery(filters);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });
  const flatMeetings = useMemo(() => data?.pages.flatMap((page) => page.content) ?? [], [data]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending) {
    return <Skeleton className="h-[1020px] w-full rounded-xl bg-gray-020" />;
  }

  return (
    <FindMeetingHeader>
      <div className="flex flex-col mb-8">
        <MeetingCardList
          meetingList={flatMeetings}
          emptyMessage="아직 모임이 없어요."
          cardGap="gap-7"
          minHeight="min-h-96"
        />
        <div ref={ref} />
      </div>
    </FindMeetingHeader>
  );
}

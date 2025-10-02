'use client';

import { useEffect, useMemo } from 'react';
import { useWishlistQuery } from '@/entities/wishlist';
import { Skeleton } from '@/shared/ui';
import { useInView } from 'react-intersection-observer';
import { useUserStore } from '@/entities/user';
import { MeetingCardList } from '@/entities/meetings';

export default function WishlistTab() {
  const memberId = useUserStore((state) => state.user?.memberId);
  const { data, fetchNextPage, isPending } = useWishlistQuery(memberId);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  const flatWishlist = useMemo(() => data?.pages.flatMap((page) => page.content) ?? [], [data]);

  useEffect(() => {
    if (inView && memberId) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, memberId]);

  if (isPending) {
    return <Skeleton className="h-full w-full rounded-xl bg-gray-020" />;
  }

  return (
    <>
      <MeetingCardList
        meetingList={flatWishlist}
        emptyMessage="위시리스트가 비어 있어요."
        cardGap="gap-6"
        minHeight=""
      />
      <div ref={ref} />
    </>
  );
}

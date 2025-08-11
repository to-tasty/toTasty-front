'use client';

import { useEffect, useMemo } from 'react';
import { useWishlistQuery } from '@/entities/wishlist';
import { Skeleton } from '@/shared';
import { useInView } from 'react-intersection-observer';
import { useUserStore } from '@/entities/user';
import WishlistCardRow from './WishlistCardRow';

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

  //   console.log('flatWishlist.length:', flatWishlist.length);

  if (isPending) {
    return <Skeleton className="h-[1020px] w-full rounded-xl bg-gray-020" />;
  }

  return (
    <div className="flex flex-col mb-8">
      <WishlistCardRow wishlistCardList={flatWishlist} />
      <div ref={ref} />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Skeleton,
} from '@/shared/ui';
import MeetingCard from './MeetingCard';
import { MeetingCardCarouselProps } from './types';

export default function MeetingCardCarousel({
  items,
  isLoading,
  emptyMessage = '표시할 항목이 없어요.',
  hrefBuilder = (id) => `/meetings/${id}`,
  itemClassName = 'flex-shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc((100%-28px*3)/4)]',
  gapClassName = 'gap-7',
  height = 310,
}: MeetingCardCarouselProps) {
  if (isLoading) {
    return <Skeleton className="w-full rounded-xl bg-gray-020" style={{ height }} />;
  }

  if (!items || items.length === 0) {
    return (
      <div
        className="w-full rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center text-center"
        style={{ height }}
      >
        {emptyMessage}
      </div>
    );
  }

  const arrowBase =
    'absolute top-1/2 -translate-y-1/2 z-10 transition-shadow duration-300 hover:shadow-md';

  return (
    <Carousel
      className="relative overflow-visible"
      opts={{ loop: false, align: 'start', containScroll: 'trimSnaps' }}
      orientation="horizontal"
    >
      <CarouselPrevious className={clsx(arrowBase, '-left-6')} style={{ pointerEvents: 'auto' }} />

      <CarouselContent className={clsx('flex', gapClassName)}>
        {items.map((item) => (
          <CarouselItem key={item.meetingId} className={itemClassName}>
            <Link href={hrefBuilder(item.meetingId)}>
              <MeetingCard meetingInfo={item} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className={clsx(arrowBase, '-right-6')} style={{ pointerEvents: 'auto' }} />
    </Carousel>
  );
}

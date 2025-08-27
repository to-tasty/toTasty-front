import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';
import { FindMeetingCard } from '@/widgets/index';
import useNewMeetingsQuery from '@/entities/homeMeetingCard/model/hooks/useNewMeetingsQuery';
import Link from 'next/link';
import { clsx } from 'clsx';

export default function NewMeetingCardArea() {
  const { data, isLoading } = useNewMeetingsQuery();
  const arrowContainerClass =
    'absolute top-1/2 -translate-y-1/2 z-10 transition-shadow duration-300 hover:shadow-md';

  if (isLoading) return null;

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center text-center h-[383px] bg-secondary text-secondary-foreground">
        아직 새로운 모임이 없어요.
        <br />
        새로운 모임을 생성해 보세요.
      </div>
    );
  }

  return (
    <Carousel
      className="relative overflow-visible"
      opts={{ loop: false, align: 'start', containScroll: 'trimSnaps' }}
      orientation="horizontal"
    >
      <CarouselPrevious
        className={clsx(arrowContainerClass, '-left-6')}
        style={{ pointerEvents: 'auto' }}
      />

      <CarouselContent className="flex gap-7">
        {data.map((item) => (
          <CarouselItem
            key={item.meetingId}
            className="flex-shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc((100%-28px*3)/4)]"
          >
            <Link href={`/meetings/${item.meetingId}`} key={item.meetingId}>
              <FindMeetingCard meetingInfo={item} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext
        className={clsx(arrowContainerClass, '-right-6')}
        style={{ pointerEvents: 'auto' }}
      />
    </Carousel>
  );
}

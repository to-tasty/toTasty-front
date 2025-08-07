import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';
import { FindMeetingCard } from '@/widgets/index';
import usePopularMeetingsQuery from '@/entities/homeMeetingCard/model/hooks/usePopularMeetingsQuery';
import Link from 'next/link';

export default function PopularMeetingCardArea() {
  const { data, isLoading } = usePopularMeetingsQuery();

  if (isLoading || !data) return null;

  return (
    <Carousel
      className="relative w-[1142px] overflow-visible"
      opts={{ loop: false, align: 'start', containScroll: 'trimSnaps' }}
      orientation="horizontal"
    >
      <CarouselPrevious
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 transition-shadow duration-300 hover:shadow-md"
        style={{ pointerEvents: 'auto' }}
      />

      <CarouselContent className="flex gap-[30px]">
        {data.map((item) => (
          <CarouselItem key={item.meetingId} className="flex-shrink-0 basis-[263px]">
            <Link href={`/meetings/${item.meetingId}`} key={item.meetingId}>
              <FindMeetingCard meetingInfo={item} size="big" />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 transition-shadow duration-300 hover:shadow-md"
        style={{ pointerEvents: 'auto' }}
      />
    </Carousel>
  );
}

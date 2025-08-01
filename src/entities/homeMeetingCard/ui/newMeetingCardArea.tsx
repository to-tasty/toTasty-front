import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';
import { FindMeetingCard } from '@/widgets/index';
import useNewMeetingsQuery from '@/entities/homeMeetingCard/model/hooks/useNewMeetingsQuery';

export default function NewMeetingCardArea() {
  const { data, isLoading } = useNewMeetingsQuery();

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

      <CarouselContent className="flex gap-[30px] ">
        {data.map((item) => (
          <CarouselItem key={item.meetingId} className="flex-shrink-0 basis-[263px]">
            <FindMeetingCard meetingInfo={item} size="big" />
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

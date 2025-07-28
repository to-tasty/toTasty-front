import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';

export default function NewMeetingCardArea() {
  return (
    <Carousel
      className="relative w-[1142px] overflow-visible"
      opts={{ loop: false, align: 'start', containScroll: 'trimSnaps' }}
      orientation="horizontal"
    >
      <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 transition-shadow duration-300 hover:shadow-md" />

      <CarouselContent className="flex gap-[30px] ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <CarouselItem key={i} className=" flex-shrink-0 basis-[263px]">
            <div className="w-full h-[333px] bg-amber-700 rounded-xl flex items-center justify-center">
              신규모임카드 {i}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 transition-shadow duration-300 hover:shadow-md" />
    </Carousel>
  );
}

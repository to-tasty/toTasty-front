import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';
import { FindMeetingCard } from '@/widgets/index';
import { MeetingList, DrinkType } from '@/entities/meetings/index';

export default function NewMeetingCardArea() {
  // TODO : 테스트용 데이터이니, 추후 서버에서 데이터 받아와서 처리하게 되면 삭제해주세요.
  const now = new Date();
  const info: MeetingList[] = [
    {
      meetingId: 1011,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: true,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1012,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: true,
      thumbnailUrl: '/assets/image/card-test-1.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1013,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1014,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1015,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1016,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1017,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1018,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
    {
      meetingId: 1019,
      meetingAuthor: '홍길동',
      meetingTitle: '우리 오늘 취해봐요~ 낭만에 취해요',
      location: {
        sido: '경기도',
        address: '경기도 성남시 판교역로 123',
        detail: '102호',
      },
      participationFee: 20_000,
      startAt: now.toISOString(),
      joinEndAt: now.toISOString(),
      maxParticipants: 5,
      minParticipants: 3,
      currentParticipants: 2,
      isWished: false,
      thumbnailUrl: '/assets/image/card-test-2.png',
      status: 'open',
      drinkType: DrinkType.whisky,
    },
  ];

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
        {info.map((item, index) => (
          <CarouselItem key={index} className=" flex-shrink-0 basis-[263px]">
            <FindMeetingCard key={index} meetingInfo={item} size="big" />
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

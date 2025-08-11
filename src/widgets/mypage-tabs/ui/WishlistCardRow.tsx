import Link from 'next/link';
import FindMeetingCard from '../../find-meeting/ui/FindMeetingCard';
import { WishlistCardInfo } from '@/entities/wishlist/model/types';

interface MeetingInfoList {
  wishlistCardList: WishlistCardInfo[] | null | undefined;
}

export default function WishlistCardRow({ wishlistCardList }: MeetingInfoList) {
  const displayList = wishlistCardList || [];

  if (displayList.length > 0) {
    return (
      <div className="flex flex-wrap w-full min-h-96 gap-7">
        {displayList.map((meetingInfo, index) => (
          <Link href={`/meetings/${meetingInfo.meetingId}`} key={meetingInfo.meetingId}>
            <FindMeetingCard
              key={meetingInfo.meetingId?.toString() || index}
              meetingInfo={meetingInfo}
              size="small"
            />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[500px] w-full items-center justify-center">
      <p className="text-muted-foreground text-sm font-medium items-center justify-center">
        아직 찜한 모임이 없어요.
      </p>
      <p className="text-muted-foreground text-sm font-medium items-center justify-center">
        지금 바로 찜한 모임을 만들어보세요.
      </p>
    </div>
  );
}

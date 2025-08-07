import { MeetingList } from '@/entities/meetings/index';
import FindMeetingCard from './FindMeetingCard';
import Link from 'next/link';

interface MeetingInfoList {
  meetingCardList: MeetingList[] | null | undefined;
}

export default function FindMeetingCardRow({ meetingCardList }: MeetingInfoList) {
  const displayList = meetingCardList || [];

  return (
    <>
      {displayList.length > 0 ? (
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
      ) : (
        <div className="flex flex-col h-[500px] w-full items-center justify-center">
          <p className="text-muted-foreground text-sm font-medium items-center justify-center">
            아직 모임이 없어요.
          </p>
          <p className="text-muted-foreground text-sm font-medium items-center justify-center">
            지금 바로 모임을 만들어보세요.
          </p>
        </div>
      )}
    </>
  );
}

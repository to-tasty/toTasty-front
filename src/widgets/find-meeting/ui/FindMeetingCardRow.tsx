import { MeetingList } from '@/entities/meetings/index';
import FindMeetingCard from './FindMeetingCard';

interface MeetingInfoList {
  meetingCardList: MeetingList[] | null | undefined;
}

export default function FindMeetingCardRow({ meetingCardList }: MeetingInfoList) {
  const displayList = meetingCardList || [];

  return (
    <div className="flex w-full min-h-96 items-center justify-center">
      <div className="flex flex-wrap gap-7">
        {displayList.length > 0 ? (
          displayList.map((meetingInfo, index) => (
            <FindMeetingCard
              key={meetingInfo.meetingId?.toString() || index}
              meetingInfo={meetingInfo}
              size="big"
            />
          ))
        ) : (
          <div>
            <p className="flex text-muted-foreground text-sm font-medium items-center justify-center">
              아직 모임이 없어요.
            </p>
            <p className="flex text-muted-foreground text-sm font-medium items-center justify-center">
              지금 바로 모임을 만들어보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

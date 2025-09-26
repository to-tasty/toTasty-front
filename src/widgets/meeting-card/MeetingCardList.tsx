import Link from 'next/link';
import { MeetingCardListProps } from './types';
import MeetingCard from './MeetingCard';

export default function MeetingCardList({
  meetingList,
  emptyMessage = '아직 모임이 없어요.',
  className = 'flex flex-wrap w-full',
  cardGap = 'gap-7',
  minHeight = 'min-h-96',
}: MeetingCardListProps) {
  const displayList = meetingList || [];

  if (displayList.length > 0) {
    return (
      <div className={`${className} ${cardGap} ${minHeight}`}>
        {displayList.map((meetingInfo, index) => (
          <Link href={`/meetings/${meetingInfo.meetingId}`} key={meetingInfo.meetingId}>
            <MeetingCard
              key={meetingInfo.meetingId?.toString() || index}
              meetingInfo={meetingInfo}
            />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[500px] w-full items-center justify-center">
      <p className="text-muted-foreground text-sm font-medium items-center justify-center">
        {emptyMessage}
      </p>
      {emptyMessage === '아직 모임이 없어요.' && (
        <p className="text-muted-foreground text-sm font-medium items-center justify-center">
          지금 바로 모임을 만들어보세요.
        </p>
      )}
    </div>
  );
}

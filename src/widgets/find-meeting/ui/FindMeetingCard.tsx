import Image from 'next/image';
import { Badge, Progress } from '@/shared/ui';
import { MeetingCardInfo } from '@/entities/meetings/index';
import clsx from 'clsx';

interface MeetingCardInfoProps {
  meetingInfo: MeetingCardInfo;
}

export default function FindMeetingCard({ meetingInfo }: MeetingCardInfoProps) {
  const flexItemCenter = 'flex items-center';
  const flexEnd = 'flex justify-end';
  const textMuted = 'text-xs text-muted';

  const cardClass =
    'border border-gray-020 rounded-sm overflow-hidden ' +
    'w-full max-w-[320px] min-w-[228px] ' +
    'h-[290px] sm:h-[320px] md:h-[333px] flex-shrink-0';

  const dateObj = new Date(meetingInfo.startAt);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const formattedStartAt = `${year}년 ${month}월 ${day}일`;

  return (
    <div key={meetingInfo.meetingId.toString() || 'card'} className={cardClass}>
      <div className="relative overflow-hidden w-full h-[163px] sm:h-[180px] md:h-[190px]">
        <Image
          src={meetingInfo.thumbnailUrl}
          alt="Meeting Card Test Image"
          fill
          style={{ objectFit: 'cover' }}
          className="col-start-1 row-start-1"
        />
        <Badge
          variant={meetingInfo.status === 'closed' ? 'tertiary' : 'default'}
          className="absolute bottom-3 left-3"
        >
          {meetingInfo.status === 'closed' ? '모임 종료' : '모집중'}
        </Badge>
        <div className="flex items-center justify-center absolute top-2 right-2 w-10 h-10 sm:w-12 sm:h-12">
          {meetingInfo.isWished && (
            <Image src="/assets/icons/heart.svg" alt="wish meeting" width={24} height={24} />
          )}
        </div>
      </div>
      <div className={clsx(flexItemCenter, 'justify-between ml-3 mt-2.5 sm:mt-3')}>
        <span className="text-xs truncate text-ellipsis w-[105px] sm:w-[120px]">
          {meetingInfo.location.address.replace(meetingInfo.location.sido, '')}
        </span>
        <div className={flexItemCenter}>
          <div className="flex items-center justify-center border rounded-xs mr-1 w-[60px] h-[20px] sm:w-[61px] sm:h-[22px]">
            <span className="text-xs font-medium text-muted-foreground">시음리스트</span>
          </div>
          <span className="text-xs font-bold mr-2 sm:text-sm sm:mr-3">
            {meetingInfo.tastingDrinkCount ?? 0}개
          </span>
        </div>
      </div>
      <div className={clsx(flexItemCenter, 'mt-[1px] ml-3 text-sm font-bold')}>
        {meetingInfo.meetingTitle}
      </div>
      <div className={clsx(flexEnd, 'mt-0.5 px-2 sm:px-3')}>
        <span className="text-xs text-primary">{meetingInfo.currentParticipants}</span>
        <span className={textMuted}>/</span>
        <span className={textMuted}>{meetingInfo.maxParticipants}명</span>
      </div>
      <div className={clsx(flexItemCenter, 'mt-1 px-3')}>
        <Progress value={(meetingInfo.currentParticipants / meetingInfo.maxParticipants) * 100} />
      </div>
      <span className={clsx(textMuted, 'ml-3 mt-1 sm:mt-1.5')}>{formattedStartAt} 예정</span>
      {meetingInfo.participationFee === 0 ? (
        <div className={clsx(flexEnd, 'text-sm font-bold px-2 sm:px-3')}>무료</div>
      ) : (
        <div className={clsx(flexEnd, 'text-sm font-bold px-2 sm:px-3')}>
          {meetingInfo.participationFee.toLocaleString('ko-KR')}원
        </div>
      )}
    </div>
  );
}

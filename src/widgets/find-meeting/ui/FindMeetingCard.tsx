import clsx from 'clsx';
import Image from 'next/image';
import { Badge, Progress } from '@/shared/ui';
import { MeetingCardInfoProps } from '../model/types';

export default function FindMeetingCard({ meetingInfo }: MeetingCardInfoProps) {
  const {
    meetingId,
    thumbnailUrl,
    isWished,
    location,
    tastingDrinkCount,
    meetingTitle,
    currentParticipants,
    maxParticipants,
    participationFee,
    startAt,
    status,
  } = meetingInfo;

  const textMuted = 'text-xs text-muted';

  const dateObj = new Date(startAt);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const formattedStartAt = `${year}년 ${month}월 ${day}일`;

  return (
    <div
      key={meetingId.toString() || 'card'}
      className={clsx(`
        border border-muted rounded-sm overflow-hidden
        max-w-[320px] min-w-[230px]
         flex-shrink-0
      `)}
    >
      <div className="relative overflow-hidden h-[160px]">
        <Image
          src={thumbnailUrl}
          alt="Meeting Card Test Image"
          fill
          style={{ objectFit: 'cover' }}
          className="col-start-1 row-start-1"
        />
        <Badge
          variant={status === 'closed' ? 'tertiary' : 'default'}
          className="absolute bottom-3 left-3"
        >
          {status === 'closed' ? '모임 종료' : '모집중'}
        </Badge>
        {isWished && (
          <Image
            src="/assets/icons/heart.svg"
            alt="wish meeting"
            width={24}
            height={24}
            className="absolute top-2 right-2 w-fit"
          />
        )}
      </div>
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between gap-1 text-xs">
          <div className="w-full max-w-[100px] truncate text-ellipsis">{location.address}</div>
          <Badge variant="outline">시음 {tastingDrinkCount}개</Badge>
        </div>
        <div className="text-sm font-bold max-w-[160px] truncate text-ellipsis">{meetingTitle}</div>
        <div className="flex justify-end">
          <span className="text-xs text-primary">{currentParticipants}</span>
          <span className={textMuted}>/</span>
          <span className={textMuted}>{maxParticipants}명</span>
        </div>
        <Progress value={(currentParticipants / maxParticipants) * 100} />
        <span className={textMuted}>{formattedStartAt} 예정</span>
        <div className="flex justify-end text-sm font-bold">
          {participationFee === 0 ? '무료' : `${participationFee.toLocaleString('ko-KR')}원`}
        </div>
      </div>
    </div>
  );
}

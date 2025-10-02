'use client';

import Link from 'next/link';
import Image from 'next/image';
import { UsersRound, Check } from 'lucide-react';
import { Badge, Button } from '@/shared/ui';
import { formatDate, formatTime } from '@/shared/lib';
import { MeetingCardInfo } from '@/entities/meetings';

function computeStatusBadges(meeting: MeetingCardInfo) {
  const min = Number(meeting.minParticipants || 0);
  const cur = Number(meeting.currentParticipants || 0);

  const badges: {
    label: string;
    tone: 'outline' | 'tertiary' | 'outlinePrimary' | 'default';
    disabled?: boolean;
  }[] = [];

  if (meeting.status === 'closed') {
    badges.push({ label: '이용 완료', tone: 'outlinePrimary', disabled: true });
  } else {
    badges.push({ label: '이용 예정', tone: 'outline' });
  }

  if (cur >= min) {
    badges.push({ label: '개설 확정', tone: 'default' });
  } else {
    badges.push({ label: '개설대기', tone: 'tertiary', disabled: true });
  }

  return badges;
}
interface MeetingActionProps {
  meeting: MeetingCardInfo;
}

function MeetingAction({ meeting }: MeetingActionProps) {
  if (meeting.status === 'closed') {
    if (!meeting.isReviewed) {
      return (
        <Link href={`/reviews/post/${meeting.meetingId}`}>
          <Button className="font-semibold" variant="default" size="sm">
            리뷰 작성하기
          </Button>
        </Link>
      );
    }
    return null;
  }

  return (
    <Link href={`/meetings/${meeting.meetingId}`}>
      <Button className="font-semibold" variant="outlinePrimary">
        모임 상세보기
      </Button>
    </Link>
  );
}

function MeetingMeta({ startAt, current, max }: { startAt: string; current: number; max: number }) {
  const start = new Date(startAt);
  return (
    <div className="flex flex-wrap items-center gap-x-4 text-sm font-medium text-secondary-foreground mt-1.5">
      <div className="flex items-center gap-1.5">
        <span>{`${formatDate(start)} · ${formatTime(start)}`}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <UsersRound className="h-4 w-4" />
        <span>
          {current}/{max}
        </span>
      </div>
    </div>
  );
}

function MyMeetingsItem({ meeting }: { meeting: MeetingCardInfo }) {
  const badges = computeStatusBadges(meeting);
  const max = Number(meeting.maxParticipants || 0);
  const cur = Number(meeting.currentParticipants || 0);

  return (
    <div key={meeting.meetingId}>
      <div className="flex items-start gap-3 sm:gap-4 my-6 relative">
        {meeting.status === 'cancelled' && (
          <div className="absolute inset-0 bg-foreground/80 z-10 rounded-3xl flex items-center justify-center text-sm font-medium text-background">
            모집 취소된 모임이에요.
            <br />
            다음 기회에 만나요 🙏
          </div>
        )}
        <div className="min-h-[156px]">
          <Link href={`/meetings/${meeting.meetingId}`}>
            <Image
              src={
                meeting.thumbnailUrl
                  ? meeting.thumbnailUrl
                  : '/placeholder.svg?height=156&width=280&query=meeting-thumbnail'
              }
              alt={`${meeting.meetingTitle} 썸네일`}
              width={280}
              height={156}
              layout="fixed"
              className="h-[156px] w-[280px] object-cover rounded-3xl border flex-shrink-0"
            />
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            {badges.map((b, i) => {
              const buttonKey = `${b.label} + ${i}`;
              return (
                <Badge key={buttonKey} variant={b.tone}>
                  {b.label === '이용 완료' && <Check className="h-4 w-4" />}
                  {b.label}
                </Badge>
              );
            })}
          </div>
          <div className="text-lg font-semibold truncate text-foreground flex items-center">
            <Link href={`/meetings/${meeting.meetingId}`}>
              {meeting.meetingTitle}&ensp;|&ensp;
              <span className="text-sm font-medium">{meeting.location.sido}</span>
              <MeetingMeta startAt={meeting.startAt} current={cur} max={max} />
            </Link>
          </div>
          <MeetingAction meeting={meeting} />
        </div>
      </div>
    </div>
  );
}

export default function MyMeetingsCardRow({ myMeetingsCardList = [] as MeetingCardInfo[] }) {
  if (myMeetingsCardList.length > 0)
    return (
      <ul className="divide-y divide-dashed">
        {myMeetingsCardList.map((m) => (
          <MyMeetingsItem key={m.meetingId} meeting={m} />
        ))}
      </ul>
    );
  return (
    <div className="flex flex-col h-[500px] w-full items-center justify-center">
      <p className="text-muted-foreground text-sm font-medium items-center justify-center">
        아직 참여한 모임이 없어요.
      </p>
    </div>
  );
}

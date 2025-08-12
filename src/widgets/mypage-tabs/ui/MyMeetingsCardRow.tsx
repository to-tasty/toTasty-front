'use client';

import Image from 'next/image';
import { Button, Dialog, DialogContent, DialogTrigger } from '@/shared';
import { UsersRound, Check } from 'lucide-react';
import { formatDate, formatTime } from '@/shared';
import { MeetingCardInfo } from '@/entities/meetings';
import Link from 'next/link';
import { useState } from 'react';
import MyMeetingsCancelDialog from './MyMeetingsCancelDialog';

interface MeetingCancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  meetingTitle?: string;
}

export function MeetingCancelModal({ isOpen, onClose, onConfirm }: MeetingCancelModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      console.error('취소 처리 중 오류가 발생했습니다:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <div className="text-center py-6">
          <p className="text-lg font-medium text-foreground">모임 참가를 취소하시겠어요?</p>
        </div>

        <div className="flex gap-3">
          <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
            돌아가기
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white"
          >
            {/* {isLoading ? '처리 중...' : '참가 취소'} */}
            참가 취소
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function computeStatusBadges(meeting: MeetingCardInfo) {
  const min = Number(meeting.minParticipants || 0);
  const cur = Number(meeting.currentParticipants || 0);

  const badges: {
    label: string;
    tone: 'meetingStatus' | 'meetingStatusSecondary';
    disabled?: boolean;
  }[] = [];

  if (meeting.status === 'closed') {
    badges.push({ label: '이용 완료', tone: 'meetingStatus', disabled: true });
  } else {
    badges.push({ label: '이용 예정', tone: 'meetingStatus' });
  }

  if (cur >= min) {
    badges.push({ label: '개설 확정', tone: 'meetingStatusSecondary' });
  } else {
    badges.push({ label: '개설대기', tone: 'meetingStatusSecondary', disabled: true });
  }

  return badges;
}

function actionFor(meeting: MeetingCardInfo) {
  if (meeting.status === 'closed') {
    if (meeting.isReviewed) {
      return {
        label: '리뷰 보기',
        variant: 'default' as const,
        href: `/reviews/${meeting.meetingId}`,
      };
    }
    return {
      label: '리뷰 작성하기',
      variant: 'default' as const,
      href: `/reviews/post/${meeting.meetingId}`,
    };
  }

  return {
    label: '예약 취소하기',
    variant: 'outlinePrimary' as const,
    href: null,
  };
}

function MeetingMeta({ startAt, current, max }: { startAt: string; current: number; max: number }) {
  const start = new Date(startAt);
  return (
    <div className="flex flex-wrap items-center gap-x-4 text-sm font-medium text-gray-070 mt-1.5">
      <div className="flex items-center gap-1.5">
        <span>{formatDate(start) + ' · ' + formatTime(start)}</span>
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
  const action = actionFor(meeting);
  const max = Number(meeting.maxParticipants || 0);
  const cur = Number(meeting.currentParticipants || 0);
  const handleCancelMeeting = async () => {
    // TODO : 모임 참가 취소 로직 구현
    console.log('모임 참가가 취소되었습니다.');
    // API 호출 등 비동기 작업 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

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
        <Image
          src={
            meeting.thumbnailUrl
              ? meeting.thumbnailUrl
              : '/placeholder.svg?height=156&width=280&query=meeting-thumbnail'
          }
          alt={`${meeting.meetingTitle} 썸네일`}
          width={280}
          height={156}
          className="h-[156px] w-[280px] object-cover rounded-3xl border flex-shrink-0"
        />

        <div className="flex flex-1 flex-col min-w-0 h-[156px] justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {badges.map((b, i) => (
              <Button
                key={b.label + i}
                variant={b.tone}
                className="rounded-full"
                size="sm"
                disabled={b.disabled}
              >
                {b.label === '이용 완료' && <Check className="h-4 w-4" />}
                {b.label}
              </Button>
            ))}
          </div>
          <div>
            <div className="text-lg font-semibold truncate">{meeting.meetingTitle}&ensp;|</div>
            <MeetingMeta startAt={meeting.startAt} current={cur} max={max} />
          </div>

          <div>
            {action.href ? (
              <Link href={action.href}>
                <Button className="font-semibold" variant={action.variant}>
                  {action.label}
                </Button>
              </Link>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="font-semibold"
                    variant={action.variant}
                    onClick={() => {
                      // TODO : 모임 참가 취소
                    }}
                  >
                    {action.label}
                  </Button>
                </DialogTrigger>
                <MyMeetingsCancelDialog onConfirm={handleCancelMeeting} />
              </Dialog>
            )}
          </div>
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
      <p className="text-muted-foreground text-sm font-medium items-center justify-center">
        지금 바로 모임에 참여해보세요.
      </p>
    </div>
  );
}

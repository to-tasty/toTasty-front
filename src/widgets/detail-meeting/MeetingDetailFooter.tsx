'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/shared/ui';
import { useUserStore } from '@/entities/user';

export default function MeetingDetailFooter({
  meetingId,
  currentParticipants,
  maxParticipants,
  participationFee,
  status,
}: {
  meetingId: number;
  currentParticipants: number;
  maxParticipants: number;
  participationFee: number;
  status: string;
}) {
  const { isLoggedIn } = useUserStore((state) => state);
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (isMobile) {
        setIsFixed(false);
        return;
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const isNearBottom = scrollTop + windowHeight >= documentHeight - 80;
      setIsFixed(!isNearBottom);
    };

    checkMobile();
    handleScroll();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const isFull = currentParticipants >= maxParticipants;
  const isClosed = status === 'closed' || status === 'cancelled';

  const isJoinDisabled = isFull || isClosed;

  const handleJoin = () => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 기능입니다.');
      return;
    }

    console.log(`모임 ${meetingId} 참가 신청`);
  };

  let containerClass = 'relative mt-20';
  if (isMobile) {
    containerClass = 'relative mt-8';
  } else if (isFixed) {
    containerClass = 'fixed bottom-0 left-0';
  }

  let buttonLabel = '참여하기';
  if (isFull) {
    buttonLabel = '모집 마감';
  } else if (isClosed) {
    buttonLabel = '모임 종료';
  }

  return (
    <>
      {!isMobile && isFixed && <div className="h-32" />}

      <div
        ref={containerRef}
        className={`border-t border-muted bg-background z-10 w-full py-3 px-4 ${containerClass}`}
      >
        <div className="max-w-[1000px] m-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-lg">
              참가비 : {participationFee === 0 ? '무료' : `${participationFee.toLocaleString()}원`}
            </span>
            <span className="text-xs text-muted-foreground">
              모두 함께 To tasty! 한 모금으로 이어지는 나만의 취향 찾기
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm hidden sm:block mr-2">
              {currentParticipants}/{maxParticipants}명 참여 중
            </span>

            <Button
              variant={isJoinDisabled ? 'outline' : 'default'}
              disabled={isJoinDisabled}
              onClick={handleJoin}
              className={`px-6 py-5 min-w-[120px] ${isJoinDisabled ? 'text-muted-foreground' : 'text-white'}`}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

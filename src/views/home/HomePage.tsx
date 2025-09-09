'use client';

import { useMemo } from 'react';
import { Button, DrinkType } from '@/shared';
import { useUserStore } from '@/entities/user';
import { HomeListKind } from '@/entities/meetings';
import { HomeMeetingSection } from '@/widgets/home';
import Link from 'next/link';

export default function HomePage() {
  const rawInterests = useUserStore((s) => s.user?.interests);
  const interests = useMemo(() => (rawInterests as DrinkType[]) || [], [rawInterests]);
  const isLoggedIn = useUserStore((s) => s.isLoggedIn);
  const userId = useUserStore((s) => s.user?.memberId);

  return (
    <div className="space-y-8 px-6">
      <HomeMeetingSection kind={HomeListKind.New} title="신규모임" />
      <HomeMeetingSection kind={HomeListKind.Popular} title="인기모임" />
      <div className="relative">
        <div className={`space-y-8 ${!isLoggedIn ? 'blur-sm pointer-events-none' : ''}`}>
          <HomeMeetingSection
            kind={HomeListKind.Favorite}
            title="내가 좋아할 모임"
            interests={interests}
          />

          <HomeMeetingSection kind={HomeListKind.Wishlist} title="위시리스트" userId={userId} />
        </div>
        {!isLoggedIn && (
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-opacity-50 text-center">
            <p className="text-foreground text-2xl mb-3">로그인 후에 이용가능 합니다.</p>
            <Link href="/login" className="font-semibold text-background">
              <Button variant="default" size="lg" className="w-55 h-11 cursor-pointer">
                로그인하기
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

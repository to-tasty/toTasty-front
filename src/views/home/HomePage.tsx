'use client';

import { useMemo } from 'react';
import { DrinkType } from '@/shared';
import { useUserStore } from '@/entities/user';
import { HomeListKind } from '@/entities/meetings';
import { HomeMeetingSection, HomeLoginOverlay } from '@/widgets/home';

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
        {!isLoggedIn && <HomeLoginOverlay />}
      </div>
    </div>
  );
}

'use client';

import { DrinkType } from '@/shared/constants';
import { useUserStore } from '@/entities/user';
import {
  MeetingCardCarousel,
  HomeListKind,
  MeetingCardInfo,
  useHomeMeetingsQuery,
} from '@/entities/meetings';

function emptyCopy(kind: HomeListKind) {
  switch (kind) {
    case HomeListKind.New:
      return '아직 새로운 모임이 없어요.';
    case HomeListKind.Popular:
      return '아직 인기 모임이 없어요.';
    case HomeListKind.Favorite:
      return '아직 내가 좋아할 모집중인 모임이 없어요.';
    case HomeListKind.Wishlist:
      return '아직 위시리스트가 없어요.';
    default:
      return '아직 모임이 없어요.';
  }
}

export default function HomeMeetingSection(props: {
  kind: HomeListKind;
  title: string;
  interests?: DrinkType[];
  userId?: number;
}) {
  const { kind, title, interests, userId } = props;
  const isLoggedIn = useUserStore((s) => s.isLoggedIn);
  const requiresAuth = kind === HomeListKind.Favorite || kind === HomeListKind.Wishlist;
  const enabled = !requiresAuth || isLoggedIn;
  const { data = [], isLoading } = useHomeMeetingsQuery({
    kind,
    interests,
    userId,
    enabled,
  }) as { data?: MeetingCardInfo[]; isLoading: boolean };

  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-xl">{title}</h2>
      {requiresAuth && !isLoggedIn ? (
        <MeetingCardCarousel items={[]} isLoading />
      ) : (
        <MeetingCardCarousel items={data} isLoading={isLoading} emptyMessage={emptyCopy(kind)} />
      )}
    </section>
  );
}

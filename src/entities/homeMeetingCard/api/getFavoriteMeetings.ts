import { getApi } from '@/shared';
import { HomeMeetingCard } from '../model/types';

export default async function getFavoriteMeetings(interests: string[]): Promise<HomeMeetingCard[]> {
  if (!interests?.length) return [];

  const pages = await Promise.all(
    interests.map((type) =>
      getApi<{ content: HomeMeetingCard[] }>(`/api/v1/meetings?drinkType=${type}&page=1&size=10`),
    ),
  );

  const merged = pages.flatMap((res) => res?.content ?? []);

  const toTime = (m: HomeMeetingCard): number => {
    const raw = m.startAt ?? m.joinEndAt;
    if (!raw) return 0;
    const timeMs = Date.parse(raw);
    return Number.isFinite(timeMs) ? timeMs : 0;
  };

  merged.sort((a, b) => toTime(b) - toTime(a));

  return merged.slice(0, 10);
}

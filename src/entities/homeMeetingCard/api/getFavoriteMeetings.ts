import { getApi } from '@/shared';
import { HomeMeetingCard } from '../model/types';

export default async function getFavoriteMeetings(interests: string[]): Promise<HomeMeetingCard[]> {
  if (!interests || interests.length === 0) return [];

  const interestParams = interests.map((type) => `drinkType=${type}`).join('&');
  const res = await getApi<{ content: HomeMeetingCard[] }>(
    `/api/v1/meetings?${interestParams}&page=1&size=10`,
  );

  return res ? res.content : [];
}

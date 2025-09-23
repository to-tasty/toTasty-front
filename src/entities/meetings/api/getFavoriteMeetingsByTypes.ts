import { DrinkType } from '@/shared';
import getMeetingList from './getMeetingList';
import { MeetingCardInfo } from '../types';

async function fetchByDrink(drinkType: DrinkType): Promise<MeetingCardInfo[]> {
  const res = await getMeetingList({ drinkType, size: 10 }, 1);
  return res?.content ?? [];
}

function isUpcomingOpen(m: MeetingCardInfo, now = Date.now()) {
  const deadline = m.joinEndAt ? Date.parse(m.joinEndAt) : Number.POSITIVE_INFINITY;
  const isOpen = m.status ? m.status === 'open' : true;
  return Number.isFinite(deadline) && deadline >= now && isOpen;
}

function byJoinEndThenStart(a: MeetingCardInfo, b: MeetingCardInfo) {
  const da = a.joinEndAt ? Date.parse(a.joinEndAt) : Number.POSITIVE_INFINITY;
  const db = b.joinEndAt ? Date.parse(b.joinEndAt) : Number.POSITIVE_INFINITY;
  if (da !== db) return da - db;
  const sa = a.startAt ? Date.parse(a.startAt) : Number.POSITIVE_INFINITY;
  const sb = b.startAt ? Date.parse(b.startAt) : Number.POSITIVE_INFINITY;
  return sa - sb;
}

function dedupeById(list: MeetingCardInfo[]) {
  const seen = new Set<number>();
  return list.filter((m) => (seen.has(m.meetingId) ? false : (seen.add(m.meetingId), true)));
}

export default async function getFavoriteMeetingsByTypes(
  drinkTypes: DrinkType[],
  limit = 10,
): Promise<MeetingCardInfo[]> {
  if (!drinkTypes?.length) return [];

  const pages = await Promise.all([...drinkTypes].sort().map(fetchByDrink));
  const merged = pages.flat();
  return dedupeById(merged.filter(isUpcomingOpen).sort(byJoinEndThenStart)).slice(0, limit);
}

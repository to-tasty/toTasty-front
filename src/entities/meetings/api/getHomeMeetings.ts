import getMeetingList from './getMeetingList';
import { HomeListParams, MeetingCardInfo } from '../types';

export default async function getHomeMeetings(
  params: HomeListParams = {},
): Promise<MeetingCardInfo[]> {
  const { page = 1, size = 10, sort, drinkType } = params;

  const res = await getMeetingList(
    {
      sort,
      drinkType,
      size,
    },
    page,
  );

  return res?.content ?? [];
}

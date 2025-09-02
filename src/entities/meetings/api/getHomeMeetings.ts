import getMeetingList from './getMeetingList';
import { HomeListInfo, MeetingCardInfo } from '../model/types';

export default async function getHomeMeetings(
  params: HomeListInfo = {},
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

import { DrinkType } from '@/shared';
import { MeetingCardInfo, SortType } from '@/entities/meetings';

export interface MeetingCardInfoProps {
  meetingInfo: MeetingCardInfo;
}
export interface FindFilterBtn {
  id: string;
  name: string;
  drinkType?: DrinkType;
}

export interface Region {
  regionCode: number;
  sido: string;
}

export interface SorterState {
  sorterCode: number;
  sorter: string;
  sortType?: SortType;
}

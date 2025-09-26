import { MeetingCardInfo } from '@/entities/meetings';

export interface MeetingCardProps {
  meetingInfo: MeetingCardInfo;
}

export interface MeetingCardCarouselProps {
  items: MeetingCardInfo[];
  isLoading?: boolean;
  emptyMessage?: string;
  hrefBuilder?: (id: number) => string;
  itemClassName?: string;
  gapClassName?: string;
  height?: number;
}

export interface MeetingCardListProps {
  meetingList: MeetingCardInfo[] | null | undefined;
  emptyMessage?: string;
  className?: string;
  cardGap?: string;
  minHeight?: string;
}

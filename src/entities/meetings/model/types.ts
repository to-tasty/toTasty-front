export enum DrinkType {
  coffee = 'COFFEE',
  whisky = 'WHISKY',
  wine = 'WINE',
}

export interface MeetingParticipant {
  memberId: number;
  nickname: string;
  profileImgUrl: string;
  isHost: boolean;
}

export interface MeetingCardInfo {
  meetingId: number;
  meetingAuthor: string;
  meetingTitle: string;
  location: {
    sido: string;
    address: string;
    detail: string;
  };
  participationFee: number;
  startAt: string;
  joinEndAt: string;
  maxParticipants: number;
  minParticipants: number;
  currentParticipants: number;
  isWished: boolean;
  thumbnailUrl: string;
  status: 'open' | 'closed' | 'cancelled';
  isReviewed?: boolean;
  drinkType: DrinkType;
  participation?: MeetingParticipant[];
}

export interface MeetingFilters {
  filter?: string;
  sort?: 'latest' | 'popularity' | 'costHigh' | 'costLow';
  drinkType?: DrinkType;
}

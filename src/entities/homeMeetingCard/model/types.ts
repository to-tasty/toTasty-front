export interface HomeMeetingCard {
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
  tastingDrinkCount: number;
  isWished: boolean;
  thumbnailUrl: string;
  status: string;
  drinkType: string;
  participation: { memberId: number; nickname: string; profileImgUrl: string; isHost: boolean }[];
  isReviewed: boolean;
}

import { DrinkType, TastingInfo } from '@/shared';

export default interface PostMeetingFormData {
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
  thumbnailUrl: string;
  drinkType: DrinkType;
  tastingList: TastingInfo[];
  content: string;
}

import { DrinkType } from '@/entities/meetings/model/types';
import { TastingInfo } from '@/entities/tasting-list/model/types';

export interface PostMeetingFormData {
  meetingTitle: string;
  meetingAuthor: string;
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
  thumbnailUrl: File | null;
  drinkType: DrinkType;
  tastingList: TastingInfo[];
  description: string;
}

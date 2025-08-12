import { TastingInfo } from '@/shared';

export default interface ReviewFormData {
  meetingId: number;
  reviewRating: number;
  reviewContent: string;
  tastingList: TastingInfo[];
}

// TastingInfo
import { TastingInfo } from '@/entities/tasting-list';

export default interface ReviewFormData {
  meetingId: number;
  reviewRating: number;
  reviewContent: string;
  tastingList: TastingInfo[];
}

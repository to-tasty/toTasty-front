import { TastingInfo } from '@/shared/constants';

export interface PostReviewInfo {
  meetingId: number;
  reviewRating: number;
  reviewContent: string;
  tastingList: TastingInfo[];
}

export interface ReviewSucceedInfo {
  reviewId: number;
}

import { TastingInfo } from '@/entities/tasting-list';

export interface ReviewContent {
  reviewId: number;
  memberId: number;
  memberNickname: string;
  meetingId: number;
  meetingTitle: string;
  thumbnailUrl: string;
  reviewRating: number;
  reviewContent: string;
  reviewer: string;
  reviewerImgUrl: string;
}

interface PageInfo {
  totalPages: number;
  totalElements: number;
  hasNextPage: boolean;
}

export interface ReviewDetailInfo {
  meetingId: number;
  reviewRating: number;
  reviewContent: string;
  tastingList: TastingInfo[];
}

export interface ReviewList {
  reviews: ReviewContent[];
  pageInfo: PageInfo;
}

export interface ReviewFilters {
  page: number;
  size: number;
  meetingId?: number;
}

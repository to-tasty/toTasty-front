import TastingList from '@/entities/TastingList/model/types';

export default interface ReviewDetailInfo {
  meetingId: number;
  reviewRating: number;
  reviewContent: string;
  tastingList: TastingList;
}

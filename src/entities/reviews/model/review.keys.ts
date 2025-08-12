import { createQueryKeys } from '@lukemorales/query-key-factory';
import { QueryFunctionContext } from '@tanstack/react-query';
import { ReviewFilters } from './types';
import getReviewList from '../api/getReviewList';
import getReviewDetail from '../api/getReviewDetail';
import getMyReviewList from '../api/getMyReviewList';

const reviewKeys = createQueryKeys('reviews', {
  all: null,
  list: (filter: ReviewFilters) => ({
    queryKey: [filter],
    queryFn: () => getReviewList(filter),
  }),
  detail: (reviewId: number) => ({
    queryKey: [reviewId],
    queryFn: () => getReviewDetail(reviewId),
  }),
  myReviews: (memberId: number | undefined) => ({
    queryKey: [memberId],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext<[number], number>) =>
      getMyReviewList(pageParam),
  }),
});

export default reviewKeys;

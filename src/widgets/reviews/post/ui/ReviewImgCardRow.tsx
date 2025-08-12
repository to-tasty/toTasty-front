'use client';

import { useTastingListQuery } from '@/entities/tasting-list';
import ReviewImgCard from './ReviewImgCard';

export default function ReviewImgCardRow({ meetingId }: { meetingId: number }) {
  const { isPending, data } = useTastingListQuery(meetingId);

  if (isPending) {
    return '';
  }

  const tastingListRender = () => {
    const imageCards = data?.tastingList.map((item) => (
      <ReviewImgCard key={`reviewImgCard${item.drinkId}`} item={item} />
    ));
    return [imageCards];
  };

  return (
    <div>
      <span className="text-xl font-bold text-gray-080">시음 리스트</span>
      <div className="flex items-center gap-8"> {tastingListRender()}</div>
    </div>
  );
}

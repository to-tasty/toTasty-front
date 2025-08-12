import { TastingInfo } from '@/shared';
import ReviewImgCard from './ReviewImgCard';

export default function ReviewImgCardRow({ tastingInfo }: { tastingInfo?: TastingInfo[] }) {
  const tastingListRender = () => {
    const imageCards = tastingInfo?.map((item) => (
      <ReviewImgCard key={`reviewImgCard${item.drinkId}`} item={item} />
    ));
    return [imageCards];
  };

  return (
    <div>
      <span className="text-sm font-medium text-gray-080">시음 리스트</span>
      <div className="flex items-center gap-8 mt-4"> {tastingListRender()}</div>
    </div>
  );
}

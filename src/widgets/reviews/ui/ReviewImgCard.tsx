import Image from 'next/image';
import { TastingInfo } from '@/shared';

interface ReviewImgProps {
  item: TastingInfo;
}

export default function ReviewImgCard({ item }: ReviewImgProps) {
  return (
    <div className="w-[114px] h-[184px]">
      <div className="relative w-[114px] h-[148px] bg-white border-2 border-gray-020 rounded-xl">
        <Image
          src={item.drinkImgUrl ?? ''}
          alt={item.drinkName ?? ''}
          fill
          style={{ objectFit: 'fill' }}
          className="rounded-xl"
        />
      </div>
      <span className="block text-sm font-medium text-gray-070 mt-3 text-center overflow-hidden whitespace-nowrap truncate">
        {item.drinkName}
      </span>
    </div>
  );
}

import Image from 'next/image';
import { TastingInfo } from '@/shared';

interface ReviewImgProps {
  item: TastingInfo;
}

export default function ReviewImgCard({ item }: ReviewImgProps) {
  return (
    <div className="w-28">
      <div className="relative w-full h-38 rounded-xl border-1 border-muted">
        <Image
          src={item.drinkImgUrl ?? ''}
          alt={item.drinkName ?? ''}
          fill
          style={{ objectFit: 'fill' }}
          className="rounded-xl"
        />
      </div>
      <p className="text-sm font-medium text-secondary-foreground text-center mt-2 truncate text-ellipsis">
        {item.drinkName}
      </p>
    </div>
  );
}

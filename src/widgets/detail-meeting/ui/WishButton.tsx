import { Heart } from 'lucide-react';
import { Button } from '@/shared/ui';

export default function WishButton({ isWished }: { isWished: boolean }) {
  return (
    <Button variant="ghost" className="bg-transparent hover:bg-transparent group">
      <Heart
        className={
          isWished ? 'fill-danger/70 text-danger/70' : 'text-muted group-hover:fill-danger/70'
        }
      />
    </Button>
  );
}

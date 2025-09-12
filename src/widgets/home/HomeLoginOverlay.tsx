import Link from 'next/link';
import { Button } from '@/shared';

export default function HomeLoginOverlay() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-opacity-50 text-center">
      <p className="text-2xl mb-3">로그인 후에 이용가능 합니다.</p>
      <Link href="/login">
        <Button variant="default" size="lg" className="w-55 cursor-pointer">
          로그인하기
        </Button>
      </Link>
    </div>
  );
}

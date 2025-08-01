'use client';

import { NewMeetingCardArea } from '@/entities/homeMeetingCard/index';
import WishlistCardArea from '@/entities/homeMeetingCard/ui/wishlistCardArea';
import { Button } from '@/shared';
import Link from 'next/link';
import { useUserStore } from '@/entities/user';

export default function HomePage() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <main className="flex items-center justify-center flex-col gap-4 py-[40px]">
      <div>
        <h1 className="font-semibold text-xl pb-[20px]">신규모임</h1>
        <NewMeetingCardArea />
      </div>
      <div>
        <h1 className="font-semibold text-xl pb-[20px] mt-8">인기모임</h1>
        <NewMeetingCardArea />
      </div>
      <div className="relative">
        <div
          className={`flex flex-col gap-16 mt-8 ${!isLoggedIn ? 'blur-sm pointer-events-none' : ''}`}
        >
          <div>
            <h1 className="font-semibold text-xl pb-[20px]">내가 좋아할 모임</h1>
            <div className="flex justify-center items-center text-center w-[1142px] h-[383px] bg-secondary text-secondary-foreground">
              아직 내가 좋아할 모임이 없어요.
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-xl pb-[20px]">위시리스트</h1>
            <WishlistCardArea />
          </div>
        </div>
      </div>
      {!isLoggedIn && (
        <div className="absolute top-330 z-10  bg-opacity-50 flex gap-4 flex-col items-center justify-center">
          <span className="text-foreground text-2xl">로그인 후에 이용가능 합니다.</span>

          <Button variant="default" size="lg" className="w-55 h-11 cursor-pointer">
            <Link href="/login" className="font-semibold text-background">
              로그인하기
            </Link>
          </Button>
        </div>
      )}
    </main>
  );
}

import { UserProfileCard, MyPageTabs } from '@/widgets';
import { ReactNode } from 'react';

export default function MypageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[992px] flex flex-col my-8 gap-8">
        <span className="text-2xl font-semibold">마이 페이지</span>
        <UserProfileCard />
        <MyPageTabs>{children}</MyPageTabs>
      </div>
    </div>
  );
}

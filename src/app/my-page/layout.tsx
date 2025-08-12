import { UserProfileCard } from '@/widgets';
import MyPageTabs from '@/widgets/profile-card/ui/MypageTabs';
import { ReactNode } from 'react';

export default function MypageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[992px] flex flex-col my-8 gap-8">
      <span className="text-2xl font-semibold">마이 페이지</span>
      <UserProfileCard />
      <MyPageTabs>{children}</MyPageTabs>
    </div>
  );
}

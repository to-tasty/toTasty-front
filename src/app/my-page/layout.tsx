import { UserProfileCard } from '@/widgets';
import MyPageTabs from '@/widgets/profile-card/ui/MypageTabs';
import { ReactNode } from 'react';

export default function MypageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <UserProfileCard />
      <MyPageTabs>{children}</MyPageTabs>
    </>
  );
}

'use client';

import { NavigationMenu, DropdownMenu, Logo, DropdownMenuTrigger } from '@/shared/ui';
import { UserIcon } from '@/entities/user/ui';
import { LoginButton, NavTabs, UserDropdown } from '@/features/navigation/ui';
import { useUserStore } from '@/shared/lib/hooks/useUserStore';
import { useShallow } from 'zustand/shallow';

export default function NavBar() {
  const { isLoggedIn } = useUserStore(
    useShallow((state) => ({
      // 선택자 함수로 필요한 속성만 구독, useShallow를 사용해 불필요한 리렌더링 방지
      isLoggedIn: state.isLoggedIn,
    })),
  );
  // const isLoggedIn = true;
  return (
    <div className="w-full bg-white sticky flex justify-center border-b border-[#E3E7EB]">
      <div className="flex justify-between h-[75px] w-7xl items-center px-5">
        <NavigationMenu className="gap-6">
          <Logo />
          <NavTabs />
        </NavigationMenu>
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <UserIcon />
            </DropdownMenuTrigger>
            <UserDropdown />
          </DropdownMenu>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

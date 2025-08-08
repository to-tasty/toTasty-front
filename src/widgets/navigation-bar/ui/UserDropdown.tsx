'use client';

import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/shared';
import Link from 'next/link';
import { useLogout } from '@/features/logout';

export default function UserDropdown() {
  const { handleLogout } = useLogout();
  return (
    <DropdownMenuContent className="w-30">
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href="/my-page">마이페이지</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>로그아웃</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
}

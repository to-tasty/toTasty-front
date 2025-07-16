'use client';

import { usePathname } from 'next/navigation';
import { isActiveTab } from '@/features/Navigation/model/isActiveTab';
import { getNavTabClass } from '@/features/Navigation/model/getNavTabClass';
import Link from 'next/link';
import {
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from '@/shared/ui/NavigationMenu';

export default function NavTabs() {
  const navigationMenuItems = [
    // 추후 href url 변경할 것
    { title: '모임찾기', href: '/test-page' },
    { title: '찜한모임', href: '/wishlist' },
    { title: '나의 테이스팅', href: '/my-tasting' },
  ];
  const pathname = usePathname();

  return (
    <NavigationMenuList className="gap-4">
      {navigationMenuItems.map((item) => {
        const isActive = isActiveTab(pathname, item.href);
        return (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink className={getNavTabClass(isActive)} asChild>
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenuList>
  );
}

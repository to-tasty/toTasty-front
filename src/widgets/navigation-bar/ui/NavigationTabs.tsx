'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { NavigationMenuList, NavigationMenuLink, NavigationMenuItem } from '@/shared';

export default function NavigationTabs() {
  const pathname = usePathname();
  const navigationMenuItems = [
    { title: '모임찾기', href: '/meetings' },
    { title: '나의 테이스팅', href: '/my-page/tastings' },
    { title: '위시리스트', href: '/my-page/wishlist' },
  ];

  function getNavTabClass(href: string) {
    return clsx('text-base hover:bg-transparent focus:bg-transparent text-muted-foreground', {
      'font-bold text-primary': pathname === href || pathname.startsWith(`${href}/`),
    });
  }

  return (
    <NavigationMenuList className="gap-4">
      {navigationMenuItems.map((item) => {
        return (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink className={getNavTabClass(item.href)} asChild>
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenuList>
  );
}

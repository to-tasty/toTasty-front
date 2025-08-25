'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

export default function Container({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerWidth = pathname === '/' ? 'w-6xl' : 'w-5xl';

  return <div className={clsx(containerWidth, 'mx-auto py-8')}>{children}</div>;
}

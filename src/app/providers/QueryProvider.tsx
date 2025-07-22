'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useUserStore, refreshAccessToken } from '@/entities/user';
import { registerAxiosInterceptors } from './registerAxiosInterceptors';

export function QueryProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const accessToken = useUserStore((state) => state.accessToken);

  useEffect(() => {
    console.log('✅ [zustand] accessToken:', accessToken);
  }, [accessToken]);

  // 여기서 interceptor 등록
  useEffect(() => {
    registerAxiosInterceptors();
  }, []);

  useEffect(() => {
    console.log('🔥 QueryProvider useEffect 실행됨');
    refreshAccessToken();
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

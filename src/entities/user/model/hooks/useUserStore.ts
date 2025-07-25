'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User, UserState } from '../types';

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      accessToken: '',
      isHydrated: false,
      logIn: (user: User) => set({ user, isLoggedIn: true }),
      logOut: () => set({ user: null, isLoggedIn: false, accessToken: '' }),
      setAccessToken: (token: string) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: '' }),
      setHydrated: (value: boolean) => set({ isHydrated: value }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      },
    },
  ),
);

export default useUserStore;

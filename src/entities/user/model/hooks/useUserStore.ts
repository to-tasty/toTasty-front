import { create } from 'zustand';
import { User, UserState } from '../types';

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  logIn: (user) => set({ isLoggedIn: true, user: user as User }),
  logOut: () => set({ isLoggedIn: false, user: null }),
  accessToken: '',
  setAccessToken: (token: string) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: '' }),
}));

export default useUserStore;

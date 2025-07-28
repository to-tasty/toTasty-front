export interface User {
  email: string;
  nickname: string;
  profileImgUrl: string;
  interests: string[];
  memberId: number;
  accessToken: string;
}

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  accessToken: string;
  isHydrated: boolean;
  logIn: (user: User) => void;
  logOut: () => void;
  updateProfile: (partial: Partial<User>) => void;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
  setHydrated: (value: boolean) => void;
}

export interface ReissueResponse {
  accessToken: string;
  user: User;
}

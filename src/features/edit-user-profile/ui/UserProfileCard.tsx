'use client';

import { useUserStore } from '@/entities/user';
import { UserIcon } from '@/shared';
import ProfileEditDialog from './ProfileEditDialog';

export default function UserProfileCard() {
  const { user } = useUserStore();
  if (!user) return null;

  return (
    <div className="relative flex flex-col w-full max-w-[992px] h-[148px] rounded-2xl overflow-hidden shadow-xs bg-white outline-2 outline-gray-020">
      <div className="bg-primary h-[66px] relative flex flex-col justify-between">
        <div className="flex justify-between px-6 mt-4 ">
          <h1 className="text-gray-090 text-lg font-semibold">내 프로필</h1>
          <ProfileEditDialog />
        </div>
        <div className="left-0 w-full h-[2px] bg-primary-060 mb-1.5" />
      </div>
      <div className="absolute left-6 top-[58px]">
        <UserIcon
          type="myPageIcon"
          ImageUrl={user.profileImgUrl}
          className="outline-4 outline-white"
        />
      </div>

      <div className="px-25 py-3 grow text-gray-600">
        <h2 className="text-gray-080 font-semibold text-base my-1">{user.nickname}</h2>
        <div>
          <span className="font-medium text-sm">관심사. </span>
          <span className="text-sm">{user.interests.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

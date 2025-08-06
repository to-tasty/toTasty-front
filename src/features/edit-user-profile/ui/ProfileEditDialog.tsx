'use client';

import { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  UserIcon,
} from '@/shared/ui';
import { Camera, Check, ChevronDown } from 'lucide-react';
import useUserStore from '@/entities/user/model/hooks/useUserStore';

interface UpdatedUserProfile {
  nickname: string;
  profileImgUrl: string;
  interests: string[];
}

const INTEREST_LABELS = {
  coffee: '☕ 커피',
  whiskey: '🥃 위스키',
  wine: '🍷 와인',
} as const;

export default function ProfileEditDialog() {
  const user = useUserStore.getState().user;
  const updateProfile = useUserStore.getState().updateProfile;

  const [profile, setProfile] = useState<UpdatedUserProfile>({
    nickname: '',
    profileImgUrl: '',
    interests: [],
  });

  // user가 바뀌면 profile 상태 초기화
  useEffect(() => {
    if (user) {
      setProfile({
        nickname: user.nickname || '',
        profileImgUrl: user.profileImgUrl || '',
        interests: Array.isArray(user.interests) ? user.interests : [],
      });
    }
  }, [user]);

  const toggleInterest = (interest: keyof typeof INTEREST_LABELS) => {
    setProfile((prev: UpdatedUserProfile) => {
      const hasInterest = prev.interests.includes(interest);
      const newInterests = hasInterest
        ? prev.interests.filter((i: string) => i !== interest)
        : [...prev.interests, interest];
      return {
        ...prev,
        interests: newInterests,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 상태 저장(store에 반영)
    updateProfile({
      nickname: profile.nickname,
      profileImgUrl: profile.profileImgUrl,
      interests: profile.interests,
    });
    // 필요시 다이얼로그 닫기 등 추가 처리
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>프로필 정보를 수정하고 저장 버튼을 클릭하세요.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <ProfileImageUploader profileImgUrl={profile.profileImgUrl} />

          <NicknameInput
            nickname={profile.nickname}
            setNickname={(nickname) =>
              setProfile((prev: UpdatedUserProfile) => ({ ...prev, nickname }))
            }
          />

          <InterestSelect interests={profile.interests} toggleInterest={toggleInterest} />
        </div>

        <DialogFooter className="flex gap-2">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="flex-1 bg-transparent">
              취소
            </Button>
          </DialogClose>
          <Button type="submit" className="flex-1">
            수정하기
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

function ProfileImageUploader({ profileImgUrl }: { profileImgUrl: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <UserIcon ImageUrl={profileImgUrl || undefined} />
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
        >
          <Camera className="h-4 w-4" />
          <span className="sr-only">프로필 이미지 변경</span>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">프로필 이미지 변경</p>
    </div>
  );
}

function NicknameInput({
  nickname,
  setNickname,
}: {
  nickname: string;
  setNickname: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="nickname">닉네임</Label>
      <Input
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임을 입력하세요"
      />
    </div>
  );
}

function InterestSelect({
  interests,
  toggleInterest,
}: {
  interests: string[];
  toggleInterest: (interest: keyof typeof INTEREST_LABELS) => void;
}) {
  const selectedLabels =
    interests.length > 0
      ? interests.map((i) => INTEREST_LABELS[i as keyof typeof INTEREST_LABELS]).join(', ')
      : '관심사를 선택하세요';

  return (
    <div className="grid gap-3">
      <Label className="text-sm font-medium">관심사</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" className="justify-between bg-transparent">
            {selectedLabels}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {(Object.keys(INTEREST_LABELS) as Array<keyof typeof INTEREST_LABELS>).map(
                  (interest) => (
                    <CommandItem
                      key={interest}
                      onSelect={() => toggleInterest(interest)}
                      className="cursor-pointer"
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          interests.includes(interest) ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {INTEREST_LABELS[interest]}
                    </CommandItem>
                  ),
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

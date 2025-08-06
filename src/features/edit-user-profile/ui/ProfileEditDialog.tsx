'use client';

import {
  Button,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui';
import useUserStore from '@/entities/user/model/hooks/useUserStore';
import { useAppForm } from '@/shared';
import ProfileImageUploadField from './ProfileImageUploader';
import usePatchUserProfileMutation from '../model/hooks/usePatchUserProfileMutation';
import UpdatedUserProfile from '../model/types';

const INTEREST_OPTIONS: Array<{ value: string; label: string }> = [
  { value: '커피', label: '☕ 커피' },
  { value: '와인', label: '🍷 와인' },
  { value: '위스키', label: '🥃 위스키' },
];

export default function ProfileEditDialog() {
  const profileUpdate = usePatchUserProfileMutation();
  const user = useUserStore((state) => state.user);
  const { nickname, interests, profileImgUrl } = user ?? {
    nickname: '',
    interests: [],
    profileImgUrl: '',
  };

  const form = useAppForm({
    defaultValues: { nickname, interests: [...interests], profileImgUrl },
    onSubmit: ({ value }: { value: UpdatedUserProfile }) => {
      profileUpdate.mutate(value);
    },
  });

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <form method="post" onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <form.AppField name="profileImgUrl">
            {(field) => <ProfileImageUploadField field={field} />}
          </form.AppField>

          <form.AppField name="nickname">
            {(field) => <field.TextField label="닉네임" inputType="text" />}
          </form.AppField>
          <form.AppField name="interests" mode="array">
            {(field) => (
              <field.MultiSelectField
                label="관심사"
                options={INTEREST_OPTIONS}
                field={field}
                placeholder="관심사를 선택하세요"
              />
            )}
          </form.AppField>
        </div>

        <DialogFooter className="flex gap-2">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="flex-1">
              취소
            </Button>
          </DialogClose>
          <form.Subscribe selector={(state) => state.isDefaultValue}>
            {(isDefaultValue) => (
              <Button type="submit" className="flex-1" disabled={isDefaultValue}>
                수정하기
              </Button>
            )}
          </form.Subscribe>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

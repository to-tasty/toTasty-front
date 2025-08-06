'use client';

import { Camera } from 'lucide-react';
import { Button, UserIcon } from '@/shared/ui';

interface Props {
  profileImgUrl: string;
}

export default function ProfileImageUploader({ profileImgUrl }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <UserIcon type="myPageIcon" ImageUrl={profileImgUrl || undefined} />
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

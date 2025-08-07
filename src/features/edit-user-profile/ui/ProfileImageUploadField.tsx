'use client';

import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { Button, UserIcon } from '@/shared/ui';
import { useUploadImageMutation } from '@/features/upload-image';
import { compressImage } from '@/shared/lib';
import type { AnyFieldApi } from '@tanstack/react-form';

export default function ProfileImageUploadField({ field }: { field: AnyFieldApi }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(field.state.value || '');
  const uploadMutation = useUploadImageMutation();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileName = file.name;
    // 확장자가 없으면 중단
    if (!fileName.includes('.')) {
      // TODO : 추후 토스트로 변경
      alert('유효하지 않은 파일입니다.');
      return;
    }

    const extension = fileName.split('.').pop()?.toLowerCase();
    const validExtensions = ['jpg', 'jpeg', 'png'];
    if (!extension || !validExtensions.includes(extension)) {
      alert('유효하지 않은 파일 형식입니다.');
      return;
    }

    try {
      const compressedFile = await compressImage(file, 100);
      const result = await uploadMutation.mutateAsync(compressedFile);
      if (result?.imgUrl) {
        setPreviewUrl(result.imgUrl);
        field.handleChange(result.imgUrl);
      }
    } catch (error) {
      // TODO : 토스트 혹은 모달로 에러 처리할 것
      alert('이미지 업로드 중 문제가 발생했습니다.');
    }
  };

  return (
    <div className="grid gap-2">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <UserIcon type="myPageIcon" ImageUrl={previewUrl || undefined} />
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadMutation.isPending}
          >
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}

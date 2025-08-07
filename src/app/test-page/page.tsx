'use client';

import { TestPage } from '@/views/test-page/TestPage';
import {
  GetDetailTestView,
  GetListTestView,
  PostTestView,
  PatchTestView,
  PutTestView,
  DeleteTestView,
} from '@/views/axios-api-test/index';

import { create } from 'zustand';
import { ChangeEvent } from 'react';

import { useUploadImageMutation } from '@/features/upload-image';
import Image from 'next/image';
import { Button } from '@/shared';

interface TestFile {
  selectedFile: File | null;
  setSelectedFile: (file: File | undefined) => void;
}

interface UploadedFile {
  uploadedImage: string;
  setUploadedImage: (file: string) => void;
}

const useUploadFileStore = create<TestFile>()((set) => ({
  selectedFile: null,
  setSelectedFile: (file) => set({ selectedFile: file }),
}));

const useUploadedImageFileStore = create<UploadedFile>()((set) => ({
  uploadedImage: 'https://totasty-bucket.s3.amazonaws.com/d85a906a-da8c-47b6-986e-8b801a7618f6.png',
  setUploadedImage: (file) => set({ uploadedImage: file }),
}));

export default function Page(): React.JSX.Element {
  const setSelectedFile = useUploadFileStore((state) => state.setSelectedFile);

  const uploadedImage = useUploadedImageFileStore((state) => state.uploadedImage);
  const setUploadedImage = useUploadedImageFileStore((state) => state.setUploadedImage);

  const { mutateAsync } = useUploadImageMutation();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const response = await mutateAsync(file);
      setSelectedFile(file);
      if (response) {
        setUploadedImage(response.imgUrl);
      }
    }
  };

  return (
    <div>
      <Button>
        파일 선택버튼
        <input type="file" id="file-input" onChange={handleFileChange} />
      </Button>

      <Image src={uploadedImage} alt="test" width={100} height={100} />
      <TestPage />
      <h2>
        <b>------------axios get List test--------------</b>
      </h2>
      <GetListTestView />
      <h2>
        <b>------------axios get detail test--------------</b>
      </h2>
      <GetDetailTestView />
      <h2>
        <b>------------axios post test--------------</b>
      </h2>
      <PostTestView />
      <h2>
        <b>------------axios patch test--------------</b>
      </h2>
      <PatchTestView />
      <h2>
        <b>------------axios put test--------------</b>
      </h2>
      <PutTestView />
      <h2>
        <b>------------axios delete test--------------</b>
      </h2>
      <DeleteTestView />
    </div>
  );
}

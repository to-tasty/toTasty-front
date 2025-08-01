import { postApi } from '@/shared/api/axiosApis';
import { UploadFileInfo, PresignedInfo } from '../model/types';

export default async function postFileInfo(image: File): Promise<PresignedInfo | null> {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  const info: UploadFileInfo = {
    fileName: image.name,
  };

  return postApi<PresignedInfo>('/api/v1/images', info, headers);
}

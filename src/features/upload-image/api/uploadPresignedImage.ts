import { putApi } from '@/shared/api/axiosApis';

export default async function uploadPresignedImage(
  presignedUrl: string,
  image: File,
): Promise<object | null> {
  const headers = {
    'Content-Type': image.type,
    authRequired: false,
    // presigned URL은 백엔드에서 얻은 Authorization 토큰 보내면 reject
  };
  return putApi<object>(presignedUrl, image, headers, '');
}

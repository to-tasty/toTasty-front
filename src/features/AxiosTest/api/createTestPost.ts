import { TestPost } from '@/features/AxiosTest/model/types';
import { postApi } from '@/shared/api/axiosApis';

export async function createTestPost(): Promise<TestPost | null> {
  const post: TestPost = {
    title: '테스트제목',
    body: '테스트내용',
    userId: 1,
    id: null,
  };

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  return postApi<TestPost>('/posts', post, headers, 'https://jsonplaceholder.typicode.com/');
}

'use client';

import { usePostMeetingMutation } from '@/features/meeting';
import { PostMeetingView } from '@/widgets';

export default function MeetingPostPage() {
  const { isPending, isError, error } = usePostMeetingMutation();

  if (isPending) return 'Loading...';
  if (isError) return `An error has occurred: ${error.message}`;

  return (
    <>
      <h2 className="text-3xl font-bold text-center my-15">모임 생성</h2>
      {isPending && <div>생성 중...</div>}
      {isError && <div>에러: {error}</div>}

      <div className="max-w-[1000px] mx-auto">
        <PostMeetingView />
      </div>
    </>
  );
}

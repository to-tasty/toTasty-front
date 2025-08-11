'use client';

import { useMeetingDetailQuery } from '@/entities/meetings';
import { MeetingDetailInfo } from '@/entities/meetings/model/types';
import { MeetingDetailHeader } from '@/widgets/detail-meeting';

export default function MeetingDetailPage({ meetingId }: { meetingId: number }) {
  const { data: meetingData, isLoading, error } = useMeetingDetailQuery(meetingId);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {(error as Error).message}</div>;

  return (
    <main className="max-w-[1000px] mx-auto px-4 py-6">
      <div className="mb-8">
        <MeetingDetailHeader {...(meetingData as MeetingDetailInfo)} />
      </div>

      <div className="space-y-4">
        <div className="text-gray-600">상세페이지 추가 영역 (meetingId: {meetingId})</div>
      </div>
    </main>
  );
}

'use client';

import { useMeetingDetailQuery } from '@/entities/meetings';

export default function MeetingDetailPage({ meetingId }: { meetingId: number }) {
  const { data: meetingData, isLoading, error } = useMeetingDetailQuery(meetingId);
  const { meetingTitle, tastingList } = meetingData || {};

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {(error as Error).message}</div>;

  return (
    <main>
      <div>상세페이지 영역 (meetingId: {meetingId})</div>
      <p>{meetingTitle}</p>
      <ul>
        {tastingList?.map(({ drinkId, drinkName, drinkType }) => (
          <li key={drinkId}>
            <p>{drinkName}</p>
            <p>{drinkType}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

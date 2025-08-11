'use client';

import { useMeetingDetailQuery } from '@/entities/meetings';
import { MeetingDetailInfo } from '@/entities/meetings/model/types';
import { MeetingDetailHeader, MeetingDetailFooter, ContentBox } from '@/widgets/detail-meeting';

export default function MeetingDetailPage({ meetingId }: { meetingId: number }) {
  const { data: meetingData, isLoading, error } = useMeetingDetailQuery(meetingId);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {(error as Error).message}</div>;
  if (!meetingData) return <div>모임 정보를 불러오는 중입니다...</div>;

  return (
    <main className="max-w-[1000px] mx-auto py-8">
      <div className="mb-8">
        <MeetingDetailHeader {...(meetingData as MeetingDetailInfo)} />
      </div>

      <div className="space-y-4">
        <ContentBox title="모임 상세 설명" content={meetingData.content} />
        <MeetingDetailFooter
          meetingId={meetingData.meetingId}
          currentParticipants={meetingData.currentParticipants}
          maxParticipants={meetingData.maxParticipants}
          participationFee={meetingData.participationFee}
          status={meetingData.status}
        />
      </div>
    </main>
  );
}

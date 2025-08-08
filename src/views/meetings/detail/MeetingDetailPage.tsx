'use client';

type Props = { meetingId: number };

export default function MeetingDetailPage({ meetingId }: Props) {
  return (
    <main className="mx-auto w-[1142px] py-10">
      <div className="text-gray-700">상세페이지 영역 (meetingId: {meetingId})</div>
    </main>
  );
}

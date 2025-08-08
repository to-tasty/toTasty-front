import MeetingDetailPage from '@/views/meetings/detail/MeetingDetailPage';

type PageProps = {
  params: { meetingId: string };
};

export default function MeetingDetailRoute({ params }: PageProps) {
  const meetingId = Number(params.meetingId);
  return <MeetingDetailPage meetingId={meetingId} />;
}

import { PostReview } from '@/widgets';

export default function PostReviewView({ meetingId }: { meetingId: number }) {
  return (
    <div className="max-w-5xl mx-auto">
      <PostReview meetingId={meetingId} />
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import {
  useMeetingDetailQuery,
  // useJoinMeetingMutation,
  // useCancelJoinMutation,
  // useCancelMeetingMutation,
} from '@/entities/meetings';
import type { MeetingDetailInfo } from '@/entities/meetings/model/types';
import { MeetingDetailHeader, MeetingDetailFooter, ContentBox } from '@/widgets/detail-meeting';
import { Role } from '@/widgets/detail-meeting/model/types';
import { useUserStore } from '@/entities/user';
import { useConfirm } from '@/widgets/detail-meeting/model/hook/useConfirm';

export default function MeetingDetailPage({ meetingId }: { meetingId: number }) {
  const router = useRouter();
  const { data: meetingData, isLoading, error } = useMeetingDetailQuery(meetingId);
  const isLoggedIn = useUserStore((s) => s.isLoggedIn);
  const user = useUserStore((s) => s.user);
  const { confirm, ConfirmDialog } = useConfirm();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {(error as Error).message}</div>;
  if (!meetingData) return <div>모임 정보를 불러오는 중입니다...</div>;

  const displayName = user?.nickname ?? '';
  const isHost = Boolean(
    isLoggedIn && displayName && meetingData && displayName === meetingData.meetingAuthor,
  );

  let role: Role;
  if (isHost) role = Role.host;
  else if (isLoggedIn) role = Role.member;
  else role = Role.guest;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  // --- mutations (프로젝트 훅으로 교체) ---
  // const joinMutation = useJoinMeetingMutation();
  // const cancelJoinMutation = useCancelJoinMutation();
  // const cancelMeetingMutation = useCancelMeetingMutation();

  const handlers = {
    onLogin: () => {
      router.push(`/login?redirect=/meetings/${meetingId}`);
    },
    onJoin: () => {
      // joinMutation.mutate({ meetingId });
      console.log(`[${meetingId}] 참여하기 클릭됨`);
    },
    onCancelJoin: () => {
      // cancelJoinMutation.mutate({ meetingId });
      console.log(`[${meetingId}] 참여취소 클릭됨`);
    },
    onWriteReview: () => {
      // router.push(`/meetings/${meetingId}/review`);
      console.log(`[${meetingId}] 리뷰 작성 이동`);
    },
    onShare: () => {
      if (navigator.share) {
        navigator.share({ title: 'To tasty', url: currentUrl }).catch(() => {});
      } else {
        navigator.clipboard.writeText(currentUrl);
        alert('링크가 복사되었습니다.');
      }
    },
    onCancelMeeting: async () => {
      const ok = await confirm({
        title: '모임 취소',
        description: '정말로 모임을 취소하시겠습니까?',
        confirmText: '네, 취소합니다',
        cancelText: '아니요',
        destructive: true,
      });
      if (!ok) return;
      // cancelMeetingMutation.mutate({ meetingId });
    },
    onNoop: () => {},
  };

  return (
    <main className="max-w-[1000px] mx-auto py-8">
      <div className="mb-8">
        <MeetingDetailHeader {...(meetingData as MeetingDetailInfo)} />
      </div>

      <div className="space-y-4">
        <ContentBox title="모임 상세 설명" content={meetingData.content} />

        <MeetingDetailFooter
          meeting={meetingData as MeetingDetailInfo}
          role={role}
          isHost={isHost}
          handlers={handlers}
        />
      </div>

      <ConfirmDialog />
    </main>
  );
}

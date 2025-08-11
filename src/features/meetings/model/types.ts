import { TastingInfo } from '@/shared';

export interface PostMeetingRequest {
  meetingTitle: string;
  location: {
    sido: string;
    address: string;
    detail: string;
  };
  participationFee: number;
  startAt: string;
  joinEndAt: string;
  maxParticipants: number;
  minParticipants: number;
  thumbnailUrl: string;
  content: string;
  tastingList: TastingInfo[];
}
export interface PostMeetingSucceed {
  meetingId: number;
}

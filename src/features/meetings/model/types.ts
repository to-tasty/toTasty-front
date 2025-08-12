import { MeetingDetailInfo } from '@/entities/meetings/model/types';
import { TastingInfo } from '@/shared';
import { QueryKey } from '@tanstack/react-query';

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

export interface MutationCtx {
  prev?: MeetingDetailInfo;
  detailKey: QueryKey;
}

export interface CancelMeetingRequest {
  meetingId: number;
}
export interface CancelMeetingResponse {
  meetingId: number;
  status: 'cancelled';
}

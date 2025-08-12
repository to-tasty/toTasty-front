import { TastingInfo } from '@/entities/tasting-list';
import { LocationInfo } from '@/shared';

export interface PostMeetingRequest {
  meetingTitle: string;
  location: LocationInfo;
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

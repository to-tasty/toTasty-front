import { getApi } from '@/shared';
import { MeetingDetailInfo } from '../types';

export default async function getMeetingDetail(
  meetingId: number,
): Promise<MeetingDetailInfo | null> {
  return getApi(`/api/v1/meetings/${meetingId}`);
}

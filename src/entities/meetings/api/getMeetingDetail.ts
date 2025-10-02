import { getApi } from '@/shared/api';
import { MeetingDetailInfo } from '../model/types';

export default async function getMeetingDetail(
  meetingId: number,
): Promise<MeetingDetailInfo | null> {
  return getApi(`/api/v1/meetings/${meetingId}`);
}

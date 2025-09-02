import { useQuery } from '@tanstack/react-query';
import homeMeetingsKeys from '../homeMeetings.keys';
import { HomeListKind, type HomeMeetingInfo, type MeetingCardInfo } from '../types';

export default function useHomeMeetingsQuery({
  kind,
  interests,
  userId,
  enabled,
}: HomeMeetingInfo) {
  return useQuery({
    ...homeMeetingsKeys.list(kind, { interests, userId }),
    placeholderData: [] as MeetingCardInfo[],
    enabled: !!enabled && (kind !== HomeListKind.Favorite || !!interests?.length),
    staleTime: 60_000,
  });
}

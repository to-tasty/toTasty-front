import { useQuery } from '@tanstack/react-query';
import homeMeetingsKeys from '../homeMeetings.keys';
import { HomeListKind, type HomeMeetingInfo } from '../types';

export default function useHomeMeetingsQuery({
  kind,
  interests,
  userId,
  enabled,
}: HomeMeetingInfo) {
  return useQuery({
    ...homeMeetingsKeys.list(kind, { interests, userId }),
    enabled: !!enabled && (kind !== HomeListKind.Favorite || !!interests?.length),
    staleTime: 60_000,
  });
}

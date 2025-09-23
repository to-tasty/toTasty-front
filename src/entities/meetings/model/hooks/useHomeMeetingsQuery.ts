import { useQuery } from '@tanstack/react-query';
import { HomeListKind, HomeMeetingInfo, PolicyOverrides } from '../../types';
import QueryPolicies from '../query.policies';
import homeMeetingsKeys from '../homeMeetings.keys';

export default function useHomeMeetingsQuery(
  { kind, interests, userId, enabled }: HomeMeetingInfo,
  overrides?: PolicyOverrides,
) {
  const defs = homeMeetingsKeys.list(kind, { interests, userId });
  const p = QueryPolicies.home(overrides);

  return useQuery({
    ...defs,
    enabled: !!enabled && (kind !== HomeListKind.Favorite || !!interests?.length),
    staleTime: p.staleTime,
    refetchOnWindowFocus: p.refetchOnWindowFocus,
    refetchOnReconnect: p.refetchOnReconnect,
    refetchInterval: p.refetchInterval,
    refetchIntervalInBackground: p.refetchIntervalInBackground,
  });
}

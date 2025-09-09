import { HomeListKind, MeetingDetailInfo, PolicyOverrides, QueryPolicy } from './types';

const MS = 1_000;
const MIN = 60 * MS;

const QUERY_DEFAULTS = {
  New: { staleTime: 2 * MIN },
  Popular: { staleTime: 3 * MIN },
  Favorite: { staleTime: 2 * MIN },
  Wishlist: { staleTime: 2 * MIN },

  list: { staleTime: 2 * MIN },
  detail: { staleTime: 15 * MS },
} as const;

const QUERY_BASE: Omit<QueryPolicy, 'staleTime'> = {
  refetchOnWindowFocus: true,
  refetchOnReconnect: true,
  refetchInterval: false,
  refetchIntervalInBackground: false,
};

const QueryPolicies = {
  /** 홈 섹션 전용 정책 */
  home(kind: HomeListKind, overrides?: PolicyOverrides): QueryPolicy {
    const map = {
      [HomeListKind.New]: QUERY_DEFAULTS.New.staleTime,
      [HomeListKind.Popular]: QUERY_DEFAULTS.Popular.staleTime,
      [HomeListKind.Favorite]: QUERY_DEFAULTS.Favorite.staleTime,
      [HomeListKind.Wishlist]: QUERY_DEFAULTS.Wishlist.staleTime,
    } as const;

    const staleTime = map[kind];
    const policy: QueryPolicy = { staleTime, ...QUERY_BASE };
    return { ...policy, ...(overrides ?? {}) };
  },

  /** 카탈로그/검색 리스트 정책 */
  list(overrides?: PolicyOverrides): QueryPolicy {
    const policy: QueryPolicy = { staleTime: QUERY_DEFAULTS.list.staleTime, ...QUERY_BASE };
    return { ...policy, ...(overrides ?? {}) };
  },

  /** 상세 페이지 정책 (기본값: 짧은 stale, 폴링 없음) */
  detail(overrides?: PolicyOverrides): QueryPolicy {
    const policy: QueryPolicy = { staleTime: QUERY_DEFAULTS.detail.staleTime, ...QUERY_BASE };
    return { ...policy, ...(overrides ?? {}) };
  },

  /**
   * 상세 페이지: 데이터/상태에 따른 동적 폴링 간격
   * - hotByUi=true 이면 15s 폴링
   * - 마감 10분 이내 && status=open 이면 15s 폴링
   * - 그 외 false (폴링 없음)
   */
  detailInterval(data?: MeetingDetailInfo, hotByUi?: boolean): number | false {
    if (hotByUi) return 15 * MS;
    if (!data || data.status !== 'open') return false;

    const now = Date.now();
    const end = data.joinEndAt ? Date.parse(data.joinEndAt) : Number.NaN;
    if (!Number.isFinite(end)) return false;

    const minutesLeft = (end - now) / MIN;
    return minutesLeft <= 10 && minutesLeft >= -1 ? 15 * MS : false;
  },
};

export default QueryPolicies;

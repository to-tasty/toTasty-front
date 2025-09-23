import { createQueryKeys } from '@lukemorales/query-key-factory';
import { DrinkType } from '@/shared';
import { HomeListKind, MeetingCardInfo, SortType } from '../types';
import getHomeMeetings from '../api/getHomeMeetings';
import getWishlistMeetings from '../api/getWishlistMeetings';
import getFavoriteMeetingsByTypes from '../api/getFavoriteMeetingsByTypes';

const homeMeetingsKeys = createQueryKeys('homeMeetings', {
  list: (kind: HomeListKind, extras?: { interests?: DrinkType[]; userId?: number }) => {
    const interests = extras?.interests?.length ? [...extras.interests] : [];
    const userId = extras?.userId ?? null;
    const keyObj = [{ kind, interests, userId }] as const;

    switch (kind) {
      case HomeListKind.New:
        return {
          queryKey: keyObj,
          queryFn: () => getHomeMeetings({ sort: SortType.latest }),
        };

      case HomeListKind.Popular:
        return {
          queryKey: keyObj,
          queryFn: () => getHomeMeetings({ sort: SortType.popularity }),
        };

      case HomeListKind.Wishlist:
        return {
          queryKey: keyObj,
          queryFn: () => getWishlistMeetings(),
        };

      case HomeListKind.Favorite:
        return {
          queryKey: keyObj,
          queryFn: () => getFavoriteMeetingsByTypes(interests),
        };

      default: {
        return {
          queryKey: keyObj,
          queryFn: async () => [] as MeetingCardInfo[],
        };
      }
    }
  },
});

export default homeMeetingsKeys;

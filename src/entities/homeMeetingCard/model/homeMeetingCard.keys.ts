import { createQueryKeys } from '@lukemorales/query-key-factory';
import getNewMeetings from '../api/getNewMeetings';
import getWishlistMeetings from '../api/getWishlist';
import getFavoriteMeetings from '../api/getFavoriteMeetings';

const homeMeetingCardKeys = createQueryKeys('homeMeetingCard', {
  newList: () => ({
    queryKey: ['new'],
    queryFn: () => getNewMeetings(),
  }),
  wishlist: () => ({
    queryKey: ['wishlist'],
    queryFn: () => getWishlistMeetings(),
  }),
  favorite: (interests: string[]) => ({
    queryKey: ['favorite', interests],
    queryFn: () => getFavoriteMeetings(interests),
  }),
});

export default homeMeetingCardKeys;

import { createQueryKeys } from '@lukemorales/query-key-factory';
import getNewMeetings from '../api/getNewMeetings';
import getWishlistMeetings from '../api/getWishlist';

const homeMeetingCardKeys = createQueryKeys('homeMeetingCard', {
  newList: () => ({
    queryKey: ['new'],
    queryFn: () => getNewMeetings(),
  }),
  wishlist: () => ({
    queryKey: ['wishlist'],
    queryFn: () => getWishlistMeetings(),
  }),
});

export default homeMeetingCardKeys;

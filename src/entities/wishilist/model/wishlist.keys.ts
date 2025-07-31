import { createQueryKeys } from '@lukemorales/query-key-factory';
import getWishlist from '../api/getWishlist';

const wishlistKeys = createQueryKeys('wishlist', {
  all: null,
  list: () => ({
    queryKey: ['list'],
    queryFn: () => getWishlist(),
  }),
  // TODO : 무한스크롤 구현 시 수정해서 사용할 것
});

export default wishlistKeys;

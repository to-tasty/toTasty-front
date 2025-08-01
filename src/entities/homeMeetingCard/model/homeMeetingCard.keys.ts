import { createQueryKeys } from '@lukemorales/query-key-factory';
import getNewMeetings from '../api/getNewMeetings';

const homeMeetingCardKeys = createQueryKeys('homeMeetingCard', {
  newList: () => ({
    queryKey: ['new'],
    queryFn: () => getNewMeetings(),
  }),
  // 추후 인기, 위시리스트 등 확장 가능
});

export default homeMeetingCardKeys;

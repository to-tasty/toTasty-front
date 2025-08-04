import { formOptions } from '@tanstack/react-form';
import { DrinkType } from '@/entities/meetings/model/types';
import { TastingInfo } from '@/entities/tasting-list/model/types';
import { PostMeetingFormData } from './types';

const defaultValues: PostMeetingFormData = {
  meetingTitle: '',
  meetingAuthor: '',
  location: {
    sido: '',
    address: '',
    detail: '',
  },
  participationFee: 0,
  startAt: '',
  joinEndAt: '',
  maxParticipants: 0,
  minParticipants: 0,
  currentParticipants: 1,
  thumbnailUrl: null,
  drinkType: DrinkType.coffee,
  tastingList: [] as TastingInfo[],
  description: '',
};

export const postMeetingOptions = formOptions({
  defaultValues,
  // 우선 validators를 주석 처리하고 개별 필드 validation부터 테스트
  // validators: {
  //   onSubmit: postMeetingValidator,
  // },
});

export default postMeetingOptions;

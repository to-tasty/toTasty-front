import { formOptions } from '@tanstack/react-form';
import { DrinkType } from '@/entities/meetings/model/types';
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
  startAt: null,
  joinEndAt: null,
  maxParticipants: 0,
  minParticipants: 0,
  currentParticipants: 1,
  thumbnailUrl: '',
  drinkType: DrinkType.wine,
  tastingList: [],
  description: '',
};

const postMeetingOptions = formOptions({ defaultValues });

export default postMeetingOptions;

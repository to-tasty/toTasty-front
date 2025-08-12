import { formOptions } from '@tanstack/react-form';
import ReviewFormData from './types';

const defaultValues: ReviewFormData = {
  meetingId: 0,
  reviewRating: 1,
  reviewContent: '',
  tastingList: [],
};

const reviewOptions = formOptions({
  defaultValues,
});

export default reviewOptions;

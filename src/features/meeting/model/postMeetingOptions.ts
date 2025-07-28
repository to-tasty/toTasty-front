import { formOptions } from '@tanstack/react-form';

interface RegisterData {
  fullname: string;
  age: number;
  email: string;
  username: string;
  password: string;
}

const defaultValues: RegisterData = {
  fullname: '',
  age: 0,
  email: '',
  username: '',
  password: '',
};

const postMeetingOptions = formOptions({ defaultValues });

export default postMeetingOptions;

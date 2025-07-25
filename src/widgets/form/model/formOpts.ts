import { formOptions } from '@tanstack/react-form';

interface RegisterData {
  fullname: string;
  age: number;
  email: string;
  username: string;
  password: string;
  acceptTerms: boolean;
}

const defaultValues: RegisterData = {
  fullname: '',
  age: 0,
  email: '',
  username: '',
  password: '',
  acceptTerms: false,
};

const formOpts = formOptions({ defaultValues });

export default formOpts;

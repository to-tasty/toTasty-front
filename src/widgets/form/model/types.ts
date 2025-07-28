import { type AnyFieldApi } from '@tanstack/react-form';

export interface BaseFormFieldProps {
  field: AnyFieldApi;
  label: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface FormFieldProps {
  field: AnyFieldApi;
  label: string;
  children: React.ReactNode;
  description?: string;
}

export interface TextFieldProps extends BaseFormFieldProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
}

export interface SelectFieldProps extends BaseFormFieldProps {
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export interface TextareaFieldProps extends BaseFormFieldProps {
  placeholder?: string;
  rows?: number;
}

export interface DateTimeFieldProps extends BaseFormFieldProps {
  showTime?: boolean;
  placeholder?: string;
}

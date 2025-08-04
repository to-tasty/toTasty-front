import { type AnyFieldApi } from '@tanstack/react-form';

export interface BaseFormFieldProps {
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

export interface FormFieldProps {
  field: AnyFieldApi;
  label?: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface TextFieldProps extends BaseFormFieldProps {
  inputType?: 'text' | 'email' | 'password' | 'datetime-local';
}

export interface SelectFieldProps extends BaseFormFieldProps {
  options: Array<{ value: string; label: string }>;
}

export interface TextareaFieldProps extends BaseFormFieldProps {
  rows?: number;
}
export interface NumberFieldProps extends BaseFormFieldProps {
  min?: number;
  max?: number;
  step?: number;
}

export interface DateTimeFieldProps extends BaseFormFieldProps {
  showTime?: boolean;
}

export interface FileUploadFieldProps extends BaseFormFieldProps {
  accept?: string;
}

export interface UseFieldValueOptions {
  componentName:
    | 'TextField'
    | 'NumberField'
    | 'SelectField'
    | 'TextareaField'
    | 'FileUploadField'
    | 'DateTimeField';
  fieldName?: string;
}

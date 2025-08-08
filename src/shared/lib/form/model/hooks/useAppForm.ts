import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './useFormContext';
import {
  TextField,
  TextareaField,
  SelectField,
  NumberField,
  FileUploadField,
  DateTimeField,
  AddressField,
  MultiSelectField,
} from '../../../../ui/form';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextareaField,
    SelectField,
    NumberField,
    FileUploadField,
    DateTimeField,
    AddressField,
    MultiSelectField,
  },
  formComponents: {},
});

export default useAppForm;

import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './useFormContext';
import TextField from '../../../../ui/form/TextField';
import TextareaField from '../../../../ui/form/TextareaField';
import SelectField from '../../../../ui/form/SelectField';
import NumberField from '../../../../ui/form/NumberField';
import FileUploadField from '../../../../ui/form/FileUploadField';
import DateTimeField from '../../../../ui/form/DateTimeField';

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
  },
  formComponents: {},
});

export default useAppForm;

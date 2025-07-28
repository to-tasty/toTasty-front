import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './useFormContext';
import TextField from '../../ui/TextField';
import TextareaField from '../../ui/TextareaField';
import SelectField from '../../ui/SelectField';
import NumberField from '../../ui/NumberField';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextareaField,
    SelectField,
    NumberField,
  },
  formComponents: {},
});

export default useAppForm;

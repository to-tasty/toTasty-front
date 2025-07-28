import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './useFormContext';
import TextField from '../../ui/TextField';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
  },
  formComponents: {},
});

export default useAppForm;

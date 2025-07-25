import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from './formContext';
import TextField from '../../ui/TextField';
import CheckField from '../../ui/CheckField';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    CheckField,
  },
  formComponents: {},
});

export default useAppForm;

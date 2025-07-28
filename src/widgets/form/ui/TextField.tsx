import Input from '@/shared/ui/Input';
import { useFieldContext } from '../model/hooks/useFormContext';
import FormField from './FormField';

interface TextFieldProps {
  label: string;
  inputType: string;
  placeholder?: string;
}

export default function TextField({ label, inputType, placeholder }: TextFieldProps) {
  const field = useFieldContext<string>();
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label}>
      <Input
        id={fieldId}
        type={inputType}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </FormField>
  );
}

import { Input } from '@/shared/ui';
import { useFieldValue } from '../model/hooks/useFieldValue';
import FormField from './FormField';

interface TextFieldProps {
  label: string;
  inputType: string;
  placeholder?: string;
}

export default function TextField({ label, inputType, placeholder }: TextFieldProps) {
  const { value, field } = useFieldValue<string>({ fieldType: 'string' });
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label}>
      <Input
        id={fieldId}
        type={inputType}
        name={field.name}
        value={value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </FormField>
  );
}

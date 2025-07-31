import { Input } from '@/shared/ui';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';
import { TextFieldProps } from '../../lib/form/model/types';

export default function TextField({
  label,
  inputType = 'text',
  placeholder,
  className = '',
}: TextFieldProps) {
  const { value, field } = useFieldValue<string>({ componentName: 'TextField' });
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label} className={className}>
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

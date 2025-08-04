import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';
import { TextareaFieldProps } from '../../lib/form/model/types';
import { Textarea } from '../Textarea';

export default function TextareaField({
  label,
  placeholder,
  rows = 4,
  className,
}: TextareaFieldProps) {
  const { displayValue, field } = useFieldValue<string>({ componentName: 'TextareaField' });
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label} className={className}>
      <Textarea
        id={fieldId}
        name={field.name}
        value={displayValue}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </FormField>
  );
}

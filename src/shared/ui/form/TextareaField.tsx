import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';
import { TextareaFieldProps } from '../../lib/form/model/types';

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
      <textarea
        id={fieldId}
        name={field.name}
        value={displayValue}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </FormField>
  );
}

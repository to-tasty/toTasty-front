import { useFieldContext } from '../model/hooks/useFormContext';
import FormField from './FormField';

interface TextareaFieldProps {
  label: string;
  placeholder?: string;
  rows?: number;
}

export default function TextareaField({ label, placeholder, rows = 4 }: TextareaFieldProps) {
  const field = useFieldContext<string>();
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label}>
      <textarea
        id={fieldId}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </FormField>
  );
}

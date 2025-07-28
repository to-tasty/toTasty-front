import Input from '@/shared/ui/Input';
import { useFieldContext } from '../model/hooks/useFormContext';
import FormField from './FormField';

export default function TextField({ label, inputType }: { label: string; inputType: string }) {
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
      />
    </FormField>
  );
}

import Input from '@/shared/ui/Input';
import { useFieldContext } from '../model/hooks/useFormContext';
import FormField from './FormField';

interface NumberFieldProps {
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export default function NumberField({ label, placeholder, min, max, step = 1 }: NumberFieldProps) {
  const field = useFieldContext<number>();
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label}>
      <Input
        id={fieldId}
        name={field.name}
        type="number"
        value={field.state.value || ''}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(Number(e.target.value) || 0)}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
      />
    </FormField>
  );
}

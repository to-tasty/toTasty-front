import Input from '../Input';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';

interface NumberFieldProps {
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export default function NumberField({ label, placeholder, min, max, step = 1 }: NumberFieldProps) {
  const { value, field } = useFieldValue<number>({ componentName: 'NumberField' });
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label}>
      <Input
        id={fieldId}
        name={field.name}
        type="number"
        value={value}
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

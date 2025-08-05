import Input from '../Input';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';
import { NumberFieldProps } from '../../lib/form/model/types';

export default function NumberField({
  label,
  placeholder,
  min,
  max,
  step = 1,
  className,
}: NumberFieldProps) {
  const { displayValue, field } = useFieldValue<number>({ componentName: 'NumberField' });
  const fieldId = `field-${field.name}`;

  return (
    <FormField field={field} label={label} className={className}>
      <Input
        id={fieldId}
        name={field.name}
        type="number"
        value={displayValue}
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

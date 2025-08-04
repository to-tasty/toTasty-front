import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';
import { SelectFieldProps } from '../../lib/form/model/types';

export default function SelectField({ label, options, placeholder, className }: SelectFieldProps) {
  const { displayValue, field } = useFieldValue<string>({ componentName: 'SelectField' });

  return (
    <FormField field={field} label={label} className={className}>
      <Select value={displayValue} onValueChange={(newValue) => field.handleChange(newValue)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}

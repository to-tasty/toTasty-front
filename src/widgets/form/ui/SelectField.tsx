import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui';
import { useFieldValue } from '../model/hooks/useFieldValue';
import FormField from './FormField';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
}

export default function SelectField({ label, options, placeholder }: SelectFieldProps) {
  const { value, field } = useFieldValue<string>({ componentName: 'SelectField' });

  return (
    <FormField field={field} label={label}>
      <Select value={value} onValueChange={(newValue) => field.handleChange(newValue)}>
        <SelectTrigger>
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/Select';
import { useFieldContext } from '../model/hooks/useFormContext';
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
  const field = useFieldContext<string>();

  return (
    <FormField field={field} label={label}>
      <Select value={field.state.value} onValueChange={(value) => field.handleChange(value)}>
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

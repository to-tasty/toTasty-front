import { Input, Label } from '@/shared';
import { useFieldContext } from '../model/hooks/formContext';
import FieldError from './FieldError';

export default function TextField({ label, inputType }: { label: string; inputType: string }) {
  const field = useFieldContext<string>();
  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        type={inputType}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldError field={field} />
    </>
  );
}

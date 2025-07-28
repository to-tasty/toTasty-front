import { Label } from '@/shared/ui';
import { useFieldContext } from '../model/hooks/formContext';
import FieldError from './FieldError';

export default function CheckField({ label }: { label: string }) {
  const field = useFieldContext<boolean>();

  return (
    <>
      <input
        type="checkbox"
        id={field.name}
        name={field.name}
        checked={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.checked)}
      />
      <Label htmlFor={field.name} className="inline-block ml-2">
        {label}
      </Label>
      <FieldError fieldStateMeta={field.state.meta} />
    </>
  );
}

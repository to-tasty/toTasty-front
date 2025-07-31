import Label from '../Label';
import ErrorField from './ErrorField';
import { FormFieldProps } from '../../lib/form/model/types';

export default function FormField({
  field,
  label,
  children,
  description,
  className,
}: FormFieldProps) {
  const fieldId = `field-${field.name}`;

  return (
    <div className={`grid gap-2 ${className}`}>
      <Label htmlFor={fieldId}>{label}</Label>
      <div className="relative">{children}</div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <ErrorField fieldStateMeta={field.state.meta} />
    </div>
  );
}

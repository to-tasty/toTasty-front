import Label from '../Label';
import ErrorField from './ErrorField';
import { FormFieldProps } from '../../lib/form/model/types';

export default function FormField({
  field,
  label,
  children,
  description,
  required,
  className = '',
}: FormFieldProps) {
  const fieldId = `field-${field.name}`;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center">
        {label && <Label htmlFor={fieldId}>{label}</Label>}
        {required && <p className="text-danger ml-1">*</p>}
      </div>
      {children}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <ErrorField fieldStateMeta={field.state.meta} />
    </div>
  );
}

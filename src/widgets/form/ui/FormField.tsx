import { type AnyFieldApi } from '@tanstack/react-form';
import Label from '@/shared/ui/Label';
import FieldError from './FieldError';

interface FormFieldProps {
  field: AnyFieldApi;
  label: string;
  children: React.ReactNode;
  description?: string;
}

export default function FormField({ field, label, children, description }: FormFieldProps) {
  const fieldId = `field-${field.name}`;

  return (
    <div className="grid gap-2">
      <Label htmlFor={fieldId}>{label}</Label>
      <div className="relative">{children}</div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <FieldError fieldStateMeta={field.state.meta} />
    </div>
  );
}

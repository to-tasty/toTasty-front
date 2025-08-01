import { Button } from '@/shared/ui';
import Input from '@/shared/ui/Input';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import FormField from './FormField';
import { FileUploadFieldProps } from '../../lib/form/model/types';

export default function FileUploadField({
  label,
  description,
  disabled,
  required,
  className = '',
  accept,
  placeholder,
  ...props
}: FileUploadFieldProps) {
  const { value, displayValue, field } = useFieldValue<File | null>({
    componentName: 'FileUploadField',
  });
  const fieldId = `field-${field.name}`;

  return (
    <FormField
      field={field}
      label={label}
      description={description}
      disabled={disabled}
      required={required}
      className={className}
    >
      <div className="flex items-center gap-3">
        <Input
          id={fieldId}
          name={field.name}
          type="file"
          accept={accept}
          onChange={(e) => field.handleChange(e.target.files?.[0] || null)}
          className="hidden"
          {...props}
        />
        <div
          tabIndex={-1}
          className="border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs opacity-50 md:text-sm bg-input text-secondary-foreground"
          aria-label="현재 선택된 파일 정보"
        >
          {value ? displayValue : placeholder || '이미지를 첨부해주세요'}
        </div>
        <Button
          type="button"
          variant="outline"
          tabIndex={0}
          onClick={() => document.getElementById(fieldId)?.click()}
          aria-label="파일 찾기 버튼"
          className="cursor-pointer"
        >
          파일 찾기
        </Button>
      </div>
    </FormField>
  );
}

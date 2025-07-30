import { useFieldContext } from './useFormContext';

type FieldValueType = string | number | boolean | null | undefined;

interface UseFieldValueOptions {
  fieldType: 'string' | 'number' | 'boolean';
  fieldName?: string;
}

export function useFieldValue<T extends FieldValueType>({
  fieldType,
  fieldName,
}: UseFieldValueOptions): {
  value: string;
  field: ReturnType<typeof useFieldContext<T>>;
} {
  const field = useFieldContext<T>();
  const name = fieldName || field.name;
  const { value: rawValue } = field.state;

  let processedValue: string;

  if (rawValue === undefined) {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line no-console */
      console.warn(`name이 "${name}"인  ${fieldType}Field 깂이 undefined 입니다. 확인해주세요.`);
    }
    processedValue = '';
  } else if (rawValue === null) {
    processedValue = '';
  } else if (fieldType === 'number' && Number.isNaN(rawValue)) {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line no-console */
      console.warn(`name이 "${name}"인 NumberField 값이 NaN입니다. 확인해주세요.`);
    }
    processedValue = '';
  } else {
    processedValue = String(rawValue);
  }

  return {
    value: processedValue,
    field,
  };
}

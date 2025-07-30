import { UseFieldValueOptions } from '../types';
import { useFieldContext } from './useFormContext';

export default function useFieldValue<T extends string | number | boolean | null | undefined>({
  componentName,
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
      console.warn(
        `name이 "${name}"인  ${componentName}Field 값이 undefined 입니다. 확인해주세요.`,
      );
    }
    processedValue = '';
  } else if (rawValue === null) {
    processedValue = '';
  } else if (componentName === 'NumberField' && Number.isNaN(rawValue)) {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line no-console */
      console.warn(`name이 "${name}"인  ${componentName}Field 값이 NaN 입니다. 확인해주세요.`);
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

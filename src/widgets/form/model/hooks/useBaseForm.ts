import { useForm } from '@tanstack/react-form';

interface UseBaseFormConfig<T extends Record<string, unknown>> {
  defaultValues: T;
  onSubmit: (values: T) => void | Promise<void>;
  validators?: Record<string, unknown>;
}

export function useBaseForm<T extends Record<string, unknown>>({
  defaultValues,
  onSubmit,
  validators = {},
}: UseBaseFormConfig<T>) {
  const form = useForm({
    defaultValues,
    validators,
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });

  return form;
}

export default useBaseForm;

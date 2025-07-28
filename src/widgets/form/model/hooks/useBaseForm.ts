import { useForm } from '@tanstack/react-form';

interface UseBaseFormConfig<T extends Record<string, any>> {
  defaultValues: T;
  onSubmit: (values: T) => void | Promise<void>;
  validators?: Record<string, any>;
}

export function useBaseForm<T extends Record<string, any>>({
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

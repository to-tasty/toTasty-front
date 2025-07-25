import { type AnyFieldApi } from '@tanstack/react-form';

export default function FieldError({ field }: { field: AnyFieldApi }) {
  return (
    <span className="block mb-5">
      {!field.state.meta.isValid && (
        <em className="text-red-600 text-xs">
          {field.state.meta.errors.map((err) => err.message).join(', ')}
        </em>
      )}
    </span>
  );
}

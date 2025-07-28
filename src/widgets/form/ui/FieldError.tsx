import { type AnyFieldApi } from '@tanstack/react-form';

export default function FieldError({
  fieldStateMeta,
}: {
  fieldStateMeta: AnyFieldApi['state']['meta'];
}) {
  return (
    <span className="block mb-5">
      {!fieldStateMeta.isValid && (
        <p className="text-red-600 text-xs">
          {fieldStateMeta.errors.map((err) => err.message).join(', ')}
        </p>
      )}
    </span>
  );
}

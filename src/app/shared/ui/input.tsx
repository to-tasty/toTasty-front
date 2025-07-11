interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

export function InputField({
  type,
  value,
  onChange,
  placeholder,
  className = '',
  error,
}: InputFieldProps) {
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          rounded-xl px-4 py-2
          transition-all duration-150
          placeholder-gray-400
          // focus:outline-none
          ${hasError ? 'border-2 border-[#DC2626]' : 'border-2 border-gray-200 focus:border-[#FDBA74]'}
          ${className}
        `}
      />
      {hasError && <p className="mt-1 text-sm text-[#DC2626]">{error}</p>}
    </div>
  );
}

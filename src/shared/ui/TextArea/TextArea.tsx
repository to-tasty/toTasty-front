interface TextAreaProps {
  title: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextArea({ title, placeholder, className, style }: TextAreaProps) {
  return (
    <div>
      <p className="mt-2 text-sm text-gray-500">{title}</p>
      <textarea
        className={`w-full h-24 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        style={style}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

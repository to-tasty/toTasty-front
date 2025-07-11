import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// 컴포넌트가 받을 props 타입 정의
type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SelectBox({ options, value, onChange, placeholder }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-52" ref={selectRef}>
      {}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between rounded-xl border border-gray-300 bg-white px-3 py-2 text-left shadow-sm text-sm text-gray-800 h-[40px] w-[110px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className={selectedLabel ? 'text-gray-800' : 'text-gray-400'}>
          {selectedLabel || placeholder}
        </span>
        <Image className="" src="/Polygon_1.svg" alt="" width={16} height={8} />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 text-sm text-gray-800 w-[110px] shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="cursor-pointer select-none px-3 py-2 text-gray-900 hover:bg-indigo-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

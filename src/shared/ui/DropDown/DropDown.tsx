import { useState, useRef, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface DropdownMenuProps {
  buttonImageSrc: string;
  children: ReactNode;
  menuClassName?: string;
}

export default function DropdownMenu({
  buttonImageSrc,
  children,
  menuClassName = '',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Image
        onClick={() => setIsOpen(!isOpen)}
        className=""
        src={buttonImageSrc}
        alt=""
        width={40}
        height={40}
      />
      {isOpen && (
        <div
          className={`absolute z-10 mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 text-sm text-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 'left-0' ${menuClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

type Variant =
  | 'base'
  | 'darker'
  | 'darkest'
  | 'disabled'
  | 'baseWhite'
  | 'darkerWhite'
  | 'darkestWhite'
  | 'disabledWhite';

type Size = 'lg' | 'md';

const variantStyles: Record<Variant, string> = {
  base: 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600',
  darker: 'bg-orange-700 text-white border-orange-700 hover:bg-orange-800 hover:border-orange-800',
  darkest: 'bg-orange-800 text-white border-orange-800 hover:bg-orange-900 hover:border-orange-900',
  disabled: 'bg-gray-400 text-white cursor-not-allowed border-gray-400',
  baseWhite: 'bg-white text-orange-500 border-orange-500 hover:bg-gray-100 hover:border-orange-600',
  darkerWhite:
    'bg-white text-orange-700 border-orange-700 hover:bg-gray-100 hover:border-orange-700',
  darkestWhite:
    'bg-white text-orange-800 border-orange-800 hover:bg-gray-100 hover:border-orange-800',
  disabledWhite: 'bg-white text-gray-400 border-gray-400 hover:bg-gray-100 hover:border-gray-400',
};

const sizeStyles: Record<Size, string> = {
  lg: 'w-full',
  md: 'px-10',
};

export function BaseButton({
  children,
  variant = 'base',
  size = 'md',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const style = clsx(
    'flex items-center justify-center border rounded-xl py-3 transition-colors duration-150 cursor-pointer font-semibold',
    variantStyles[disabled ? 'disabled' : variant],
    sizeStyles[size],
    className,
  );

  return (
    <button {...props} disabled={disabled} className={style}>
      {children}
    </button>
  );
}

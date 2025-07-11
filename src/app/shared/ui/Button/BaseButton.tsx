import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'solid'
    | 'solidBold'
    | 'solidStrong'
    | 'solidDisabled'
    | 'outlined'
    | 'outlinedBold'
    | 'outlinedStrong'
    | 'outlinedDisabled';
  size?: 'lg' | 'sm';
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid: 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600',
  solidBold:
    'bg-orange-700 text-white border-orange-700 hover:bg-orange-800 hover:border-orange-800',
  solidStrong:
    'bg-orange-800 text-white border-orange-800 hover:bg-orange-900 hover:border-orange-900',
  solidDisabled: 'bg-gray-400 text-white border-gray-400 cursor-default active:',
  outlined: 'bg-white text-orange-500 border-orange-500 hover:border-orange-600',
  outlinedBold: 'bg-white text-orange-700 border-orange-700 hover:border-orange-700',
  outlinedStrong: 'bg-white text-orange-800 border-orange-800 hover:border-orange-800',
  outlinedDisabled: 'bg-white text-gray-400 border-gray-400 cursor-default',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  lg: 'w-full text-base',
  sm: 'px-10 text-sm',
};

export default function BaseButton({
  children,
  variant = 'solid',
  size = 'sm',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const style = clsx(
    'flex items-center justify-center border rounded-xl py-2.5 transition-colors duration-150 font-semibold cursor-pointer',
    variantStyles[disabled ? 'solidDisabled' : variant],
    sizeStyles[size],
    className,
  );

  return (
    <button {...props} disabled={disabled} className={style}>
      {children}
    </button>
  );
}

'use client';

import { useState } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '../index';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import { AddressFieldProps } from '../../lib/form/model/types';
import FormField from './FormField';

export default function AddressField({
  label,
  description,
  className = '',
  disabled,
  required,
  placeholder = '주소를 검색하세요',
}: AddressFieldProps) {
  const { field } = useFieldValue<string>({
    componentName: 'AddressField',
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormField
      field={field}
      label={label}
      description={description}
      disabled={disabled}
      required={required}
      className={className}
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
            disabled={disabled}
          >
            {placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          열렸다
        </PopoverContent>
      </Popover>
    </FormField>
  );
}

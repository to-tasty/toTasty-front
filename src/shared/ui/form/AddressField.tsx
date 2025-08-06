'use client';

import { useState } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { LocationInfo } from '@/widgets/post-meeting/model/postMeetingOptions';
import useFieldValue from '../../lib/form/model/hooks/useFieldValue';
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '../index';
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
  const { field } = useFieldValue<LocationInfo>({
    componentName: 'AddressField',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const currentValue = (field.state?.value as LocationInfo) || {
    sido: '',
    address: '',
    detail: '',
  };

  const onCompletePost = (data: Address) => {
    const locationData: LocationInfo = {
      sido: data.sido,
      address: data.address,
      detail: '',
    };

    field.handleChange(locationData);

    setShowDetailInput(true);
    setIsOpen(false);
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const detailValue = e.target.value;
    const updatedLocation: LocationInfo = {
      ...currentValue,
      detail: detailValue,
    };

    field.handleChange(updatedLocation);
  };

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
            {currentValue?.address ? currentValue.address : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <DaumPostcode onComplete={(data) => onCompletePost(data)} />
        </PopoverContent>
      </Popover>

      {(showDetailInput || currentValue?.address) && (
        <div className="mt-2">
          <Input
            placeholder="상세 주소를 입력하세요"
            value={currentValue?.detail || ''}
            onChange={(e) => handleDetailChange(e)}
            disabled={disabled}
          />
        </div>
      )}
    </FormField>
  );
}

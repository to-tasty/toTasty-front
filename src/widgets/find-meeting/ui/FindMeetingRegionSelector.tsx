'use client';

import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/shared';
import Image from 'next/image';
import FindRegionDropdown from './FindRegionDropdown';
import useFilterRegionStore from '../model/hooks/useFilterRegionStore';

export default function FindMeetingRegionSelector() {
  const isOpen = useFilterRegionStore((state) => state.isOpen);
  const setIsOpen = useFilterRegionStore((state) => state.setIsOpen);

  const handleBtnClick = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <DropdownMenu onOpenChange={handleBtnClick}>
      <DropdownMenuTrigger asChild>
        <Button
          id="filterRegion"
          variant={isOpen ? 'findFilterClicked' : 'outline'}
          size="findFilterSize"
        >
          지역 전체
          <div className="flex w-6 h-6 items-center justify-center ml-2.5">
            <Image
              src={isOpen ? '/assets/icons/polygon-2.svg' : '/assets/icons/polygon-1.svg'}
              alt="dropdown Icon"
              width={15.7}
              height={7.42}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <FindRegionDropdown />
    </DropdownMenu>
  );
}

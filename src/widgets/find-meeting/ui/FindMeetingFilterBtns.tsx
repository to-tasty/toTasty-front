'use client';

import { Button, DrinkType } from '@/shared';
import { useFilterStore, useFilterBtnStore } from '@/entities/meetings';
import { SortType } from '@/entities/meetings/types';
import { FindFilterBtn } from '../model/types';

export default function FindMeetingFilterBtns() {
  const selectedFilterId = useFilterBtnStore((state) => state.selectedFilterBtnId);
  const setSelectedFilterId = useFilterBtnStore((state) => state.setSelectedFilterBtnId);

  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);

  const filterBtnProps: FindFilterBtn[] = [
    { id: 'filterBtn0', name: '전체' },
    { id: 'filterBtn1', name: '커피', drinkType: DrinkType.coffee },
    { id: 'filterBtn2', name: '와인', drinkType: DrinkType.wine },
    { id: 'filterBtn3', name: '위스키', drinkType: DrinkType.whisky },
    { id: 'filterBtn4', name: '마감된 모임', drinkType: DrinkType.end },
  ];

  function handleBtnClick(prop: FindFilterBtn): void {
    setSelectedFilterId(prop.id);

    if (prop.drinkType === undefined) {
      const { drinkType, page, ...newFilters } = filters;
      setFilters({ ...newFilters, page: 1, sort: SortType.latest });
    } else if (prop.drinkType === DrinkType.end) {
      const { drinkType, page, ...newFilters } = filters;
      setFilters({ ...newFilters, page: 1, sort: SortType.closedRecent });
    } else {
      setFilters({ ...filters, page: 1, sort: SortType.latest, drinkType: prop.drinkType });
    }
  }

  return (
    <div className="flex">
      {filterBtnProps.map((prop) => (
        <Button
          key={prop.id}
          id={prop.id}
          variant={selectedFilterId === prop.id ? 'findFilterClicked' : 'outline'}
          className={
            selectedFilterId === prop.id ? 'text-secondary' : 'text-foreground outline-background'
          }
          size="findFilterSize"
          onClick={() => handleBtnClick(prop)}
        >
          {prop.name}
        </Button>
      ))}
    </div>
  );
}

'use client';

import { Button } from '@/shared';
import { FindFilterBtn } from '../model/types';
import useFilterBtnStore from '../model/hooks/useFilterBtnStore';
import useFilterStore from '../model/hooks/useFilterStore';
import { DrinkType, SortType } from '@/entities/meetings';

export default function FindMeetingFilters() {
  const selectedFilterId = useFilterBtnStore((state) => state.selectedFileterBtnId);
  const setSelectedFilterId = useFilterBtnStore((state) => state.setSelectedFilterBtnId);

  const filters = useFilterStore((state) => state.filters);
  const setFileters = useFilterStore((state) => state.setFilters);

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
      const { drinkType, ...newFilters } = filters;
      setFileters({ ...newFilters, sort: SortType.latest });
    } else if (prop.drinkType === DrinkType.end) {
      const { drinkType, ...newFilters } = filters;
      setFileters({ ...newFilters, sort: SortType.closedRecent });
    } else {
      setFileters({ ...filters, sort: SortType.latest, drinkType: prop.drinkType });
    }
  }

  return (
    <div className="flex mb-1">
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

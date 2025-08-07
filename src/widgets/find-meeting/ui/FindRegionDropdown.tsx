import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/shared';
import { Region } from '../model/types';
import useFilterRegionStore from '../model/hooks/useFilterRegionStore';
import useFilterStore from '../model/hooks/useFilterStore';

export default function FindRegionDropdown() {
  const setSelectedRegion = useFilterRegionStore((state) => state.setSelectedRegion);

  const filters = useFilterStore((state) => state.filters);
  const setFilters = useFilterStore((state) => state.setFilters);

  const sidoList: Region[] = [
    { regionCode: 99, sido: '지역 전체' },
    { regionCode: 0, sido: '서울' },
    { regionCode: 1, sido: '경기' },
    { regionCode: 2, sido: '인천' },
    { regionCode: 3, sido: '강원' },
    { regionCode: 4, sido: '대전' },
    { regionCode: 5, sido: '충청' },
    { regionCode: 6, sido: '경상' },
  ];

  function selectRegion(region: Region) {
    setSelectedRegion(region.sido);

    if (region.regionCode === 99) {
      const { filter, ...newFilters } = filters;
      setFilters({ ...newFilters });
    } else {
      setFilters({ ...filters, filter: region.sido });
    }
  }

  return (
    <DropdownMenuContent>
      <DropdownMenuGroup>
        {sidoList.map((item) => {
          return (
            <DropdownMenuItem
              key={`sido${item.regionCode}`}
              className="font-sm font-medium"
              onSelect={() => selectRegion(item)}
            >
              {item.sido}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
}

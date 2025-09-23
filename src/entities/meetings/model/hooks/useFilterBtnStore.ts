import { create } from 'zustand';

interface FilterState {
  selectedFilterBtnId: string;
  setSelectedFilterBtnId: (filterName: string) => void;
}

const useFilterBtnStore = create<FilterState>()((set) => ({
  selectedFilterBtnId: 'filterBtn0',
  setSelectedFilterBtnId: (filterId) => set({ selectedFilterBtnId: filterId }),
}));

export default useFilterBtnStore;

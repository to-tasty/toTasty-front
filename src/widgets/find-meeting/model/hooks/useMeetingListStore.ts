import { create } from 'zustand';
import { MeetingList } from '@/entities/meetings/index';

interface SorterState {
  meetingList: MeetingList[] | null | undefined;
  setMeetings: (meetings: MeetingList[] | null | undefined) => void;
}

const useMeetingListStore = create<SorterState>()((set) => ({
  meetingList: null,
  setMeetings: (meetings: MeetingList[] | null | undefined) => set({ meetingList: meetings }),
}));

export default useMeetingListStore;

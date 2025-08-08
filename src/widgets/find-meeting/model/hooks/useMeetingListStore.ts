import { create } from 'zustand';
import { MeetingListInfo } from '@/entities/meetings/index';

interface SorterState {
  meetingListInfo: MeetingListInfo | null | undefined;
  setMeetings: (meetings: MeetingListInfo | null | undefined) => void;
}

const useMeetingListStore = create<SorterState>()((set) => ({
  meetingListInfo: { content: [], sliceInfo: { currentPage: 0, size: 0, hasNext: true } },
  setMeetings: (meetings: MeetingListInfo | null | undefined) => set({ meetingListInfo: meetings }),
}));

export default useMeetingListStore;

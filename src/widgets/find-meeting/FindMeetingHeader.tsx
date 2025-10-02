import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui';
import FindMeetingFilterBtns from './ui/FindMeetingFilterBtns';
// import FindMeetingFilterCalendar from './ui/FindMeetingFilterCalendar';
import FindMeetingRegionSelector from './ui/FindMeetingRegionSelector';
import FindMeetingSorter from './ui/FindMeetingSorter';

export default function FindMeetingHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex items-center gap-4">
        <Image src="/assets/icons/head.svg" alt="finding-meeting icon" width={72} height={72} />
        <div>
          <span className="text-sm font-medium">함께 할 사람이 없나요?</span>
          <h2 className="text-2xl font-semibold">지금 모임에 참여해보세요</h2>
        </div>
      </div>
      <div className="flex w-full justify-between mt-8 py-4 border-b-1">
        <FindMeetingFilterBtns />
        <Link href="/meetings/post" style={{ textDecoration: 'none' }}>
          <Button
            key="postMeetingBtn"
            id="postMeetingId"
            variant="outlinePrimary"
            size="findFilterSize"
          >
            모임 만들기
          </Button>
        </Link>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <FindMeetingRegionSelector />
          {/* <FindMeetingFilterCalendar /> */}
        </div>
        <FindMeetingSorter />
      </div>
      <div className="mt-6">{children}</div>
    </>
  );
}

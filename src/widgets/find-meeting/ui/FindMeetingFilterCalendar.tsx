'use client';

import { Button } from '@/shared';
import Image from 'next/image';
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/Popover';
import { Calendar } from '@/shared/ui/Calendar';
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';
import useFilterCalendarStore from '../model/hooks/useFilterCalendarStore';

export default function FindMeetingFilterCalendar() {
  const selectedCalendar = useFilterCalendarStore((state) => state.selectedCalendar);
  const toggleCalendarSelection = useFilterCalendarStore((state) => state.toggleCalendarSelection);
  const { date } = useFilterCalendarStore();

  return (
    <div className="flex">
      <Popover open={selectedCalendar} onOpenChange={toggleCalendarSelection}>
        <PopoverTrigger asChild>
          <Button
            id="filterCalendar"
            variant={selectedCalendar ? 'findFilterClicked' : 'outline'}
            size="findFilterSize"
          >
            날짜 전체
            <div className="flex w-6 h-6 items-center justify-center ml-2.5">
              <Image
                src={
                  selectedCalendar ? '/assets/icons/polygon-2.svg' : '/assets/icons/polygon-1.svg'
                }
                alt="dropdown Icon"
                width={15.7}
                height={7.42}
              />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            today={date}
            formatters={{
              formatWeekdayName: (day: Date) => {
                return format(day, 'eee', { locale: enUS });
              },
            }}
            classNames={{
              week: 'flex justify-between mt-2',
              day: 'flex justify-between mt-2',
              selected:
                'bg-transparent text-purple-600 hover:bg-transparent hover:text-purple-600 focus:bg-transparent focus:text-purple-600',
            }}
          />

          <div className="flex mt-3 justify-center items-center">
            <Button variant="calendarBtn1" className="mr-3">
              초기화
            </Button>
            <Button variant="calendarBtn2">적용</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

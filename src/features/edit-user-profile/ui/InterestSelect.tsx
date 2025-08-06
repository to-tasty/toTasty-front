import {
  Button,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/shared/ui';
import { Check, ChevronDown } from 'lucide-react';

const INTEREST_LABELS = {
  커피: '☕ 커피',
  와인: '🍷 와인',
  위스키: '🥃 위스키',
} as const;
const INTEREST_ORDER = Object.keys(INTEREST_LABELS);

interface Props {
  selectedInterests: string[];
  onToggle: (interest: keyof typeof INTEREST_LABELS) => void;
}

export default function InterestSelect({ selectedInterests, onToggle }: Props) {
  const selectedLabels =
    selectedInterests.length > 0
      ? [...selectedInterests]
          .sort((a, b) => INTEREST_ORDER.indexOf(a) - INTEREST_ORDER.indexOf(b))
          .map((i) => INTEREST_LABELS[i as keyof typeof INTEREST_LABELS])
          .join(', ')
      : '관심사를 선택하세요';

  return (
    <div className="grid gap-3">
      <Label className="text-sm font-medium">관심사</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" className="justify-between bg-transparent">
            {selectedLabels}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {(Object.keys(INTEREST_LABELS) as Array<keyof typeof INTEREST_LABELS>).map(
                  (interest) => (
                    <CommandItem
                      key={interest}
                      onSelect={() => onToggle(interest)}
                      className="cursor-pointer"
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          selectedInterests.includes(interest) ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {INTEREST_LABELS[interest]}
                    </CommandItem>
                  ),
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/shared';

export default function FindRegionDropdown() {
  return (
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem className="font-sm font-medium">서울</DropdownMenuItem>
        <DropdownMenuItem className="font-sm font-medium">경기</DropdownMenuItem>
        <DropdownMenuItem className="font-sm font-medium">인천</DropdownMenuItem>
        <DropdownMenuItem className="font-sm font-medium">강원</DropdownMenuItem>
        <DropdownMenuItem className="font-sm font-medium">대전</DropdownMenuItem>
        <DropdownMenuItem className="font-sm font-medium">충청</DropdownMenuItem>
        <DropdownMenuItem className="font-sm font-medium">경상</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
}

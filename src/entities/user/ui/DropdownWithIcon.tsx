import { Button } from '@/shared/ui/Button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/DropdownMenu';

export default function DropdownWithIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="overflow-hidden rounded-full">
          <img
            src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
            alt="Hallie Richards"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/my-page">마이페이지</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

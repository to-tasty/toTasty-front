import Link from 'next/link';
import { Button } from '@/shared/ui';

export default function LoginButton() {
  return (
    <Link href="/login">
      <Button
        variant="outline"
        className="bg-background font-semibold text-lg text-primary hover:text-primary"
      >
        로그인/회원가입
      </Button>
    </Link>
  );
}

import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export default function LoginButton() {
  // 로그인 페이지로 이동
  return (
    <Link href="#">
      <Button
        variant="outline"
        className="text-[#676DFF] font-semibold text-lg hover:text-[#676DFF] h-11"
      >
        로그인/회원가입
      </Button>
    </Link>
  );
}

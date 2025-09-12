import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import logout from '../../api/logout';
import { clearSession } from '@/shared';

export default function useLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      clearSession();
      router.push('/');
    } catch (error) {
      toast.error(`로그아웃에 실패했습니다:${error instanceof Error ? error.message : error} `);
    }
  };

  return { handleLogout };
}

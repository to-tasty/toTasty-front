import logout from '../../api/logout';
import { useUserStore } from '@/entities/user';
import { useRouter } from 'next/navigation';

export function useLogout() {
  const { logOut } = useUserStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      logOut();
      router.push('/');
    } catch (error) {
      // TODO : console.error와 토스트 알림으로 바꿀 것
      alert(`Logout failed: ${error instanceof Error ? error.message : error}`);
    }
  };

  return { handleLogout };
}

import { useUserStore } from '@/entities/user';
import { useRouter } from 'next/navigation';
import logout from '../../api/logout';

export default function useLogout() {
  const { setLoggedOut } = useUserStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      setLoggedOut();
      router.push('/');
    } catch (error) {
      // TODO : 토스트 알림으로 바꿀 것
      console.log(`Logout failed: ${error instanceof Error ? error.message : error}`);
    }
  };

  return { handleLogout };
}

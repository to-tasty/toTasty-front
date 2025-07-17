import { Button } from '@/shared/ui';
import { useUserStore } from '@/shared/lib/hooks/useUserStore';
import { useShallow } from 'zustand/shallow';
import { forwardRef } from 'react';

const UserIcon = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(
  (props, ref) => {
    const { profileImgUrl } = useUserStore(
      useShallow((state) => ({
        profileImgUrl: state.user.profileImgUrl,
      })),
    );
    return (
      <Button
        ref={ref}
        {...props}
        variant="secondary"
        size="icon"
        className="overflow-hidden rounded-full"
      >
        <img src={profileImgUrl} alt="profile-image" />
      </Button>
    );
  },
);

export default UserIcon;

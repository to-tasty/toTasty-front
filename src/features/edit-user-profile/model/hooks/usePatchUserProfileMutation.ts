import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useUserStore } from '@/entities/user';
import patchUserProfile from '../../api/patchUserProfile';
import UpdatedUserProfile from '../types';

export default function usePatchUserProfileMutation(): UseMutationResult<
  UpdatedUserProfile | null,
  Error,
  UpdatedUserProfile,
  unknown
> {
  const { updateProfile } = useUserStore((state) => state);
  return useMutation({
    mutationFn: (userProfile: UpdatedUserProfile) => patchUserProfile(userProfile),
    onSuccess: (data) => {
      if (data) updateProfile(data);
    },
  });
}

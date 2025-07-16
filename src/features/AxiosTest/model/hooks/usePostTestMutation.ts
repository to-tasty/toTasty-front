import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { createTestPost } from '../../api/createTestPost';

export function usePostTestMutation(): UseMutationResult<any, Error, void, unknown> {
  return useMutation({ mutationFn: createTestPost });
}

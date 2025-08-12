import { z } from 'zod';

export const contentSchema = z
  .string()
  .min(10, '설명은 최소 10글자 이상 작성해주세요')
  .max(3000, '설명은 3000글자를 초과할 수 없습니다');

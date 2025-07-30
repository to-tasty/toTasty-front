import { z } from 'zod';
import { DrinkType } from '@/entities/meetings/model/types';

export const meetingTitleSchema = z
  .string()
  .min(1, '모임 제목을 입력해주세요')
  .min(3, '모임 제목은 최소 3글자 이상이어야 합니다')
  .max(50, '모임 제목은 50글자를 초과할 수 없습니다');

export const participationFeeSchema = z
  .number()
  .min(0, '참가비는 0원 이상이어야 합니다')
  .max(1000000, '참가비는 100만원을 초과할 수 없습니다');

export const maxParticipantsSchema = z
  .number()
  .min(2, '최대 참가자는 2명 이상이어야 합니다')
  .max(50, '최대 참가자는 50명을 초과할 수 없습니다');

export const minParticipantsSchema = z.number().min(1, '최소 참가자는 1명 이상이어야 합니다');

export const drinkTypeSchema = z.nativeEnum(DrinkType, {
  message: '주류 종류를 선택해주세요',
});

export const descriptionSchema = z
  .string()
  .min(10, '설명은 최소 10글자 이상 작성해주세요')
  .max(500, '설명은 500글자를 초과할 수 없습니다');

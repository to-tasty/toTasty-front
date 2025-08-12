'use client';

import { Button } from '@/shared/ui';
import { useAppForm } from '@/shared/lib';
import { contentSchema } from './model/validationSchema';
import reviewOptions from './model/reviewOptions';
import ReviewImgCardRow from './ui/ReviewImgCardRow';

export default function PostReview({ meetingId }: { meetingId: number }) {
  const form = useAppForm({
    ...reviewOptions,
    validators: {},
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-12 text-gray-080 text-3xl font-bold mt-16 border-2 rounded-xl">
        참여했던 ~~ 모임은 어떠셨나요? 후기를 남겨주세요!
      </div>
      <form
        method="post"
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.AppField name="reviewRating">{(field) => <field.RatingField />}</form.AppField>

        <form.AppField
          name="reviewContent"
          validators={{
            onChange: contentSchema,
          }}
        >
          {(field) => (
            <field.TextareaField
              label="총평"
              placeholder="모임에 대한 설명, 음료에 대한 설명을 작성해주세요."
              maxLength={3000}
              required
              AreaClassName="min-h-[153px]"
            />
          )}
        </form.AppField>

        <ReviewImgCardRow meetingId={meetingId} />

        <div className="flex justify-center mt-4 gap-3">
          <Button type="button" size="lg" variant="outlinePrimary">
            취소하기
          </Button>
          <Button type="submit" size="lg" className="px-8">
            완료하기
          </Button>
        </div>
      </form>
    </>
  );
}

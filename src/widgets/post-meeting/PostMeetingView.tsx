import { Button } from '@/shared/ui';
import { useAppForm } from '@/shared/lib';
import { DrinkType } from '@/entities/meetings/model/types';
import { postMeetingOptions } from './model/postMeetingOptions';
import {
  meetingTitleSchema,
  participationFeeSchema,
  maxParticipantsSchema,
  minParticipantsSchema,
  drinkTypeSchema,
  descriptionSchema,
} from './model/validationSchema';

export default function PostMeetingView() {
  const form = useAppForm({
    ...postMeetingOptions,
    validators: {},
    onSubmit: ({ value }) => {
      /* eslint-disable-next-line */
      console.log('모임 생성 데이터:', JSON.stringify(value, null, 4));
    },
  });

  const drinkTypeOptions = Object.values(DrinkType).map((type) => ({
    value: type,
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));

  return (
    <form
      method="post"
      className="flex flex-col gap-4 py-8"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex gap-4">
        <form.AppField
          name="drinkType"
          validators={{
            onBlur: drinkTypeSchema,
          }}
        >
          {(field) => (
            <field.SelectField
              label="시음회 종류"
              options={drinkTypeOptions}
              placeholder="음료 종류를 선택하세요"
              className="flex-1"
            />
          )}
        </form.AppField>

        <form.AppField
          name="meetingTitle"
          validators={{
            onBlur: meetingTitleSchema,
          }}
        >
          {(field) => (
            <field.TextField
              label="모임 이름"
              inputType="text"
              placeholder="모임 이름을 작성해주세요"
              className="flex-2"
            />
          )}
        </form.AppField>
      </div>

      <form.AppField name="thumbnailUrl">
        {(field) => (
          <field.FileUploadField
            label="대표 이미지"
            accept="image/*"
            placeholder="대표 이미지를 첨부해주세요."
          />
        )}
      </form.AppField>

      <div className="flex flex-row gap-2 items-center">
        <form.AppField name="location">
          {(field) => (
            <field.TextField
              label="장소"
              inputType="text"
              placeholder="장소를 검색해주세요"
              className="w-full"
            />
          )}
        </form.AppField>
        <Button type="button" className="">
          장소 찾기
        </Button>
      </div>

      <div className="flex gap-4">
        <form.AppField name="startAt">
          {(field) => (
            <field.DateTimeField
              label="모임 날짜"
              placeholder="모임 날짜와 시간을 선택하세요"
              className="flex-1"
            />
          )}
        </form.AppField>

        <form.AppField name="joinEndAt">
          {(field) => (
            <field.DateTimeField
              label="모임 모집 마감일"
              placeholder="마감 날짜와 시간을 선택하세요"
              className="flex-1"
            />
          )}
        </form.AppField>
      </div>

      <div className="flex gap-4 w-full">
        <form.AppField
          name="minParticipants"
          validators={{
            onBlur: minParticipantsSchema,
          }}
        >
          {(field) => (
            <field.NumberField
              label="최소 모임 정원"
              placeholder="모임이 생성될 수 있는 최소 인원을 작성해주세요"
              className="flex-1"
            />
          )}
        </form.AppField>

        <form.AppField
          name="maxParticipants"
          validators={{
            onBlur: maxParticipantsSchema,
          }}
        >
          {(field) => (
            <field.NumberField
              label="최대 모임 정원"
              placeholder="최대 참가자 수"
              className="flex-1"
            />
          )}
        </form.AppField>
      </div>

      <form.AppField
        name="participationFee"
        validators={{
          onBlur: participationFeeSchema,
        }}
      >
        {(field) => <field.NumberField label="참가 비용" placeholder="참가비를 입력하세요" />}
      </form.AppField>

      <div>
        <h2 className="text-base font-medium mb-2">시음 리스트</h2>
        <div className="flex gap-4">
          <form.AppField name="tastingList">
            {(field) => <field.TextField placeholder="음료명을 작성해주세요" className="flex-3" />}
          </form.AppField>
          <form.AppField name="tastingList">
            {(field) => (
              <field.FileUploadField
                accept=".txt,.csv"
                placeholder="음료 이미지를 첨부해주세요"
                className="flex-2"
              />
            )}
          </form.AppField>
        </div>
        <Button type="button" variant="ghost" className="cursor-pointer mx-auto block">
          + 시음 리스트 추가하기
        </Button>
      </div>

      <form.AppField
        name="description"
        validators={{
          onBlur: descriptionSchema,
        }}
      >
        {(field) => (
          <field.TextareaField label="상세 설명" placeholder="모임에 대한 설명을 입력하세요" />
        )}
      </form.AppField>

      {/* 제출 버튼 */}
      <div className="flex justify-center mt-4 gap-3">
        <Button type="button" size="lg" variant="outlinePrimary">
          작성 취소
        </Button>
        <Button type="submit" size="lg" className="px-8">
          모임 만들기
        </Button>
      </div>
    </form>
  );
}

'use client';

import { Button } from '@/shared/ui';
import { useAppForm } from '@/shared/lib';
import { DrinkType } from '@/entities/meetings/model/types';
import { useUploadImageMutation } from '@/features/upload-image';
import ErrorField from '@/shared/ui/form/ErrorField';
import { postMeetingOptions } from './model/postMeetingOptions';
import {
  meetingTitleSchema,
  ImageUrlSchema,
  participationFeeSchema,
  maxParticipantsSchema,
  minParticipantsSchema,
  drinkTypeSchema,
  descriptionSchema,
  locationSchema,
  startAtSchema,
  joinEndAtSchema,
  meetingDateSchema,
  tastingListSchema,
  drinkNameSchema,
} from './model/validationSchema';

export default function PostMeetingView() {
  const form = useAppForm({
    ...postMeetingOptions,
    validators: {},
    onSubmit: ({ value }) => {
      try {
        meetingDateSchema.parse({
          startAt: value.startAt,
          joinEndAt: value.joinEndAt,
        });

        console.log('모임 생성 데이터:', JSON.stringify(value, null, 4));
      } catch (error) {
        alert(JSON.parse(error as string)[0].message);
      }
    },
  });

  const uploadMutation = useUploadImageMutation();

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
            onChange: drinkTypeSchema,
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
            onChange: meetingTitleSchema,
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

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <form.AppField
            name="participationFee"
            validators={{
              onChange: participationFeeSchema,
            }}
          >
            {(field) => (
              <field.NumberField
                label="참가 비용"
                placeholder="참가비를 입력하세요"
                min={0}
                max={1000000}
                step={1}
                className="w-full"
              />
            )}
          </form.AppField>
          <span className="text-secondary-foreground mt-1 absolute right-3 top-7">원</span>
        </div>

        <form.AppField
          name="thumbnailUrl"
          validators={{
            onChange: ImageUrlSchema('대표'),
          }}
        >
          {(field) => (
            <field.FileUploadField
              label="대표 이미지"
              placeholder="대표 이미지를 첨부해주세요."
              uploadFile={uploadMutation.mutateAsync}
              hasUploadError={uploadMutation.isError}
              className="flex-2"
            />
          )}
        </form.AppField>
      </div>

      <form.AppField
        name="location"
        validators={{
          onChange: locationSchema,
        }}
      >
        {(field) => (
          <field.AddressField label="장소" placeholder="장소를 입력해주세요" className="w-full" />
        )}
      </form.AppField>

      <div className="flex gap-4">
        <form.AppField
          name="joinEndAt"
          validators={{
            onChange: joinEndAtSchema,
          }}
        >
          {(field) => (
            <field.DateTimeField
              label="모집 마감일"
              placeholder="마감 날짜와 시간을 선택하세요"
              className="flex-1"
            />
          )}
        </form.AppField>

        <form.AppField
          name="startAt"
          validators={{
            onChange: startAtSchema,
          }}
        >
          {(field) => (
            <field.DateTimeField
              label="모임 날짜"
              placeholder="모임 날짜와 시간을 선택하세요"
              className="flex-1"
            />
          )}
        </form.AppField>
      </div>

      <div className="flex gap-4 w-full">
        <form.AppField
          name="minParticipants"
          validators={{
            onChange: minParticipantsSchema,
          }}
        >
          {(field) => (
            <field.NumberField
              label="최소 모임 정원"
              placeholder="모임이 생성될 수 있는 최소 인원을 작성해주세요"
              className="flex-1"
              min={1}
              step={1}
            />
          )}
        </form.AppField>

        <form.AppField
          name="maxParticipants"
          validators={{
            onChange: maxParticipantsSchema,
          }}
        >
          {(field) => (
            <field.NumberField
              label="최대 모임 정원"
              placeholder="최대 참가자 수"
              className="flex-1"
              min={2}
              step={1}
            />
          )}
        </form.AppField>
      </div>

      <form.AppField
        name="tastingList"
        mode="array"
        validators={{
          onChange: tastingListSchema,
        }}
      >
        {(field) => (
          <div>
            <p className="text-sm leading-none font-medium select-none">시음 음료 목록</p>
            <ErrorField fieldStateMeta={field.state.meta} />
            {field.state.value.map((_, index) => {
              const itemKey = `tastingList-${index}`;
              return (
                <div key={itemKey} className="flex gap-2">
                  <form.AppField
                    name={`tastingList[${index}].drinkName`}
                    validators={{
                      onChange: drinkNameSchema,
                    }}
                  >
                    {(subField) => (
                      <subField.TextField
                        placeholder="샤르도네 2025, 바닐라 라떼, 몽키숄더 등"
                        className="flex-2"
                      />
                    )}
                  </form.AppField>
                  <form.AppField
                    name={`tastingList[${index}].drinkImgUrl`}
                    validators={{
                      onChange: ImageUrlSchema('음료'),
                    }}
                  >
                    {(subField) => (
                      <subField.FileUploadField
                        placeholder="음료 이미지를 첨부해주세요"
                        className="flex-1"
                        uploadFile={uploadMutation.mutateAsync}
                        hasUploadError={uploadMutation.isError}
                      />
                    )}
                  </form.AppField>
                  <Button
                    type="button"
                    variant="outlineDanger"
                    onClick={() => field.removeValue(index)}
                  >
                    삭제
                  </Button>
                </div>
              );
            })}
            <Button
              type="button"
              variant="ghost"
              onClick={() => field.pushValue({ drinkName: '', drinkImgUrl: '' })}
              className="cursor-pointer w-full"
            >
              <span className="border border-primary text-primary leading-[110%] rounded-full w-5 h-5 flex justify-center">
                +
              </span>
              시음 리스트 추가하기
            </Button>
          </div>
        )}
      </form.AppField>

      <form.AppField
        name="description"
        validators={{
          onChange: descriptionSchema,
        }}
      >
        {(field) => (
          <field.TextareaField label="상세 설명" placeholder="모임에 대한 설명을 입력하세요" />
        )}
      </form.AppField>

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

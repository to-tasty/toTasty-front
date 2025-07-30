import { Button } from '@/shared/ui';
import { useAppForm } from '@/shared/lib/form';
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
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.AppField
        name="meetingTitle"
        validators={{
          onBlur: meetingTitleSchema,
        }}
      >
        {(field) => (
          <field.TextField
            label="Meeting Title"
            inputType="text"
            placeholder="모임 제목을 입력하세요"
          />
        )}
      </form.AppField>
      <form.AppField
        name="participationFee"
        validators={{
          onBlur: participationFeeSchema,
        }}
      >
        {(field) => (
          <field.NumberField label="Participation Fee" placeholder="참가비를 입력하세요" />
        )}
      </form.AppField>
      <form.AppField name="startAt">
        {(field) => <field.TextField label="Start At" inputType="datetime-local" />}
      </form.AppField>
      <form.AppField name="joinEndAt">
        {(field) => <field.TextField label="Join End At" inputType="datetime-local" />}
      </form.AppField>
      <form.AppField
        name="maxParticipants"
        validators={{
          onBlur: maxParticipantsSchema,
        }}
      >
        {(field) => <field.NumberField label="Max Participants" placeholder="최대 참가자 수" />}
      </form.AppField>
      <form.AppField
        name="minParticipants"
        validators={{
          onBlur: minParticipantsSchema,
        }}
      >
        {(field) => <field.NumberField label="Min Participants" placeholder="최소 참가자 수" />}
      </form.AppField>
      <form.AppField name="thumbnailUrl">
        {(field) => <field.TextField label="Thumbnail URL" inputType="file" />}
      </form.AppField>
      <form.AppField
        name="drinkType"
        validators={{
          onBlur: drinkTypeSchema,
        }}
      >
        {(field) => (
          <field.SelectField
            label="Drink Type"
            options={drinkTypeOptions}
            placeholder="음료 종류를 선택하세요"
          />
        )}
      </form.AppField>
      <form.AppField
        name="description"
        validators={{
          onBlur: descriptionSchema,
        }}
      >
        {(field) => (
          <field.TextareaField label="Description" placeholder="모임 설명을 입력하세요" />
        )}
      </form.AppField>
      <Button type="submit">모임 생성</Button>
    </form>
  );
}

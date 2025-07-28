import { Button } from '@/shared/ui';
import { DrinkType } from '@/entities/meetings/model/types';
import { useAppForm } from '@/widgets/form';
import postMeetingOptions from './model/postMeetingOptions';

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
      <form.AppField name="meetingTitle">
        {(field) => <field.TextField label="Meeting Title" inputType="text" />}
      </form.AppField>
      <form.AppField name="meetingAuthor">
        {(field) => <field.TextField label="Meeting Author" inputType="text" />}
      </form.AppField>
      <form.AppField name="participationFee">
        {(field) => <field.NumberField label="Participation Fee" />}
      </form.AppField>
      <form.AppField name="startAt">
        {(field) => <field.TextField label="Start At" inputType="datetime-local" />}
      </form.AppField>
      <form.AppField name="joinEndAt">
        {(field) => <field.TextField label="Join End At" inputType="datetime-local" />}
      </form.AppField>
      <form.AppField name="maxParticipants">
        {(field) => <field.NumberField label="Max Participants" />}
      </form.AppField>
      <form.AppField name="minParticipants">
        {(field) => <field.NumberField label="Min Participants" />}
      </form.AppField>
      <form.AppField name="thumbnailUrl">
        {(field) => <field.TextField label="Thumbnail URL" inputType="file" />}
      </form.AppField>
      <form.AppField name="drinkType">
        {(field) => <field.SelectField label="Drink Type" options={drinkTypeOptions} />}
      </form.AppField>
      <form.AppField name="description">
        {(field) => <field.TextareaField label="Description" />}
      </form.AppField>
      <Button type="submit">모임 생성</Button>
    </form>
  );
}

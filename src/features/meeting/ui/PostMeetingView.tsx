import { Button } from '@/shared/ui';
import { useAppForm } from '@/widgets/form';
import postMeetingOptions from '../model/postMeetingOptions';

export default function PostMeetingView() {
  const form = useAppForm({
    ...postMeetingOptions,
    validators: {},
    onSubmit: ({ value }) => {
      /* eslint-disable-next-line */
      console.log('모임 생성 데이터:', JSON.stringify(value, null, 4));
    },
  });

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
      <form.AppField name="fullname">
        {(field) => <field.TextField label="Full Name" inputType="text" />}
      </form.AppField>
      <form.AppField name="email">
        {(field) => <field.TextField label="Email" inputType="email" />}
      </form.AppField>
      <form.AppField name="age">
        {(field) => <field.TextField label="Age" inputType="number" />}
      </form.AppField>
      <form.AppField name="username">
        {(field) => <field.TextField label="Username" inputType="text" />}
      </form.AppField>
      <form.AppField name="password">
        {(field) => <field.TextField label="Password" inputType="password" />}
      </form.AppField>
      <Button type="submit">모임 생성</Button>
    </form>
  );
}

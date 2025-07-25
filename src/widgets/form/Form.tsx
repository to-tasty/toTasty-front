import useAppForm from './model/hooks/useAppForm';
import formOpts from './model/formOpts';

export default function Form() {
  const form = useAppForm({
    ...formOpts,
    validators: {},
    onSubmit: ({ value }) => {
      /* eslint-disable-next-line */
      console.log(JSON.stringify(value, null, 4));
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
      <form.AppField name="acceptTerms">
        {(field) => <field.CheckField label="I accept all terms and conditions" />}
      </form.AppField>
      <button
        type="submit"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

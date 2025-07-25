interface LabelProps extends React.ComponentProps<'label'> {}

export default function Label(props: LabelProps) {
  const { className, ...restProps } = props;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={`block mb-2 text-sm font-medium text-gray-900 ${className}`}
        {...restProps}
      />
    </>
  );
}

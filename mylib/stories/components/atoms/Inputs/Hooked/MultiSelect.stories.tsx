import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MultiSelect from '../../../../../src/components/atoms/Inputs/Hooked/MultiSelectHooked';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/atoms/Inputs/Hooked/MultiSelect',
  component: MultiSelect,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MultiSelect>;

// const [files, setFiles] = useState<File[]>([]);
const regMock = (text, any) => {};

const names = [
  { id: 1, name: 'john' },
  { id: 2, name: 'james' },
  { id: 3, name: 'jack' },
];
const MultiSelectTemplate = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<{ name: string }>();

  return (
    <div style={{ height: '10rem' }}>
      <MultiSelect
        control={control}
        name={'name'}
        options={names.map(name => {
          return { value: name.id, label: name.name };
        })}
      />
    </div>
  );
};

type MultiStory = StoryObj<typeof MultiSelectTemplate>;

export const Multiple: MultiStory = {
  render: () => <MultiSelectTemplate />,
};

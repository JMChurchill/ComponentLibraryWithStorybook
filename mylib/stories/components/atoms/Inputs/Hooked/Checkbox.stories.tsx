import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../../../src/components/atoms/Inputs/Hooked/CheckboxHooked';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/atoms/Inputs/Hooked/Checkbox',
  component: Checkbox,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// const [files, setFiles] = useState<File[]>([]);
const regMock = (text, any) => {};
export const Default: Story = {
  args: {
    register: regMock,
    groupName: 'testGroup',
    error: null,
    name: 'Checkbox',
    required: false,
    value: 'true',
    children: 'Default box',
  },
};

const MultipleCheckboxes = () => {
  return (
    <div>
      <Checkbox
        groupName="one"
        name="multiGroup"
        required={false}
        value={'1'}
        register={regMock}
      >
        One
      </Checkbox>
      <Checkbox
        groupName="two"
        name="multiGroup"
        required={false}
        value={'2'}
        register={regMock}
      >
        Two
      </Checkbox>
    </div>
  );
};

type MultiStory = StoryObj<typeof MultipleCheckboxes>;

export const Multiple: MultiStory = {
  render: () => <MultipleCheckboxes />,
};

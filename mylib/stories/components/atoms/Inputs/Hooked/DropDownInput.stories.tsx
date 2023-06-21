import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DropDownInput from '../../../../../src/components/atoms/Inputs/Hooked/DropDownHooked';
import Card from '../../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof DropDownInput> = {
  title: 'Components/atoms/Inputs/Hooked/Dropdown',
  component: DropDownInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DropDownInput>;

// const [files, setFiles] = useState<File[]>([]);
const regMock = (text, any) => {};
export const Default: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};
export const Empty: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'drop',
    options: [],
  },
};
export const Multivalues: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'drop',
    options: [
      { value: '1', label: 'opt 1' },
      { value: '2', label: 'opt 2' },
      { value: '3', label: 'opt 3' },
    ],
  },
};

export const Error: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
    error: true,
  },
};

export const OnCard: Story = {
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  args: {
    register: regMock,
    required: false,
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};
export const OnNestedCard: Story = {
  decorators: [
    (Story) => (
      <Card>
        <NestedCard>
          <Story />
        </NestedCard>
      </Card>
    ),
  ],
  args: {
    register: regMock,
    required: false,
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};

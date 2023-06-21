import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DateInput from '../../../../../src/components/atoms/Inputs/Hooked/DateInputHooked';
import Card from '../../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof DateInput> = {
  title: 'Components/atoms/Inputs/Hooked/DateInput',
  component: DateInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DateInput>;

// const [files, setFiles] = useState<File[]>([]);
const regMock = (text, any) => {};
export const Default: Story = {
  args: { register: regMock, required: false, name: 'dateSel' },
};
export const min: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'dateSel',
    min: new Date().toISOString().slice(0, 10),
  },
};
export const max: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'dateSel',
    max: new Date().toISOString().slice(0, 10),
  },
};
const yesterday = new Date();
export const minMax: Story = {
  args: {
    register: regMock,
    required: false,
    name: 'dateSel',
    min: new Date(yesterday.setDate(yesterday.getDate() - 7))
      .toISOString()
      .slice(0, 10),
    max: new Date().toISOString().slice(0, 10),
  },
};
export const Error: Story = {
  args: { register: regMock, required: false, name: 'dateSel', error: true },
};

export const OnCard: Story = {
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  args: { register: regMock, required: false, name: 'dateSel' },
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
  args: { register: regMock, required: false, name: 'dateSel' },
};

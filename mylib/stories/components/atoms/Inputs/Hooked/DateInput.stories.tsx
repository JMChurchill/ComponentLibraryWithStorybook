import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DateInput from '../../../../../src/components/atoms/Inputs/Hooked/DateInputHooked';

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

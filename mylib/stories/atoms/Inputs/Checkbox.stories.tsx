import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../src/components/atoms/Inputs/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/atoms/Inputs/Checkbox',
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

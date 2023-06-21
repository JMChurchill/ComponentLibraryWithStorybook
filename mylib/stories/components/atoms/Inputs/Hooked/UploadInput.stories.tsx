import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UploadInput from '../../../../../src/components/atoms/Inputs/Hooked/FileSelectInput/UploadInput';
import Card from '../../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof UploadInput> = {
  title: 'Components/atoms/Inputs/Hooked/Upload',
  component: UploadInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof UploadInput>;

const regMock = (text, any) => {};
export const Default: Story = {
  args: {
    register: regMock,
    multipleFiles: [],
    setMultipleFiles: () => {},
  },
};

const files: File[] = [
  new File([''], 'file1.txt', { type: 'text/html' }),
  new File([''], 'file2.txt', { type: 'text/html' }),
];
export const HasFiles: Story = {
  args: {
    register: regMock,
    multipleFiles: files,
    setMultipleFiles: () => {},
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
    multipleFiles: [],
    setMultipleFiles: () => {},
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
    multipleFiles: [],
    setMultipleFiles: () => {},
  },
};

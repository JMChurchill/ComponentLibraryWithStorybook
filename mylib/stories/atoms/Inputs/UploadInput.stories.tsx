import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UploadInput from '../../../src/components/atoms/Inputs/FileSelectInput/UploadInput';

const meta: Meta<typeof UploadInput> = {
  title: 'Components/atoms/Inputs/Upload',
  component: UploadInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof UploadInput>;

// const [files, setFiles] = useState<File[]>([]);
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

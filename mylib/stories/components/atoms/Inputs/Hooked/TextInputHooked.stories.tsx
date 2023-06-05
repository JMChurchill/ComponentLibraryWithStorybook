import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextInput from '../../../../../src/components/atoms/Inputs/Hooked/TextInputHooked';

const meta: Meta<typeof TextInput> = {
  title: 'Components/atoms/Inputs/Hooked/TextInput',
  component: TextInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextInput>;

const regMock = (text, any) => {};
export const Default: Story = {
  args: {
    register: regMock,
    error: null,
    name: 'testInput',
    required: false,
    multiline: false,
    placeholder: 'default input',
  },
};
export const Multiline: Story = {
  args: {
    register: regMock,
    error: null,
    name: 'testInput',
    required: false,
    multiline: true,
    placeholder: 'multiline input',
  },
};

export const Password: Story = {
  args: {
    register: regMock,
    error: null,
    name: 'testInput',
    required: false,
    multiline: false,
    placeholder: 'default input',
    password: true,
  },
};
export const Error: Story = {
  args: {
    register: regMock,
    error: true,
    name: 'testInput',
    required: false,
    multiline: false,
    placeholder: 'default input',
  },
};
export const MultilineError: Story = {
  args: {
    register: regMock,
    error: true,
    name: 'testInput',
    required: false,
    multiline: true,
    placeholder: 'default input',
  },
};

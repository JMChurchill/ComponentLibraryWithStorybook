import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextInput from '../../../../../src/components/atoms/Inputs/Hooked/TextInputHooked';
import Card from '../../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../../src/components/atoms/Cards/NestedCard';

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

export const AdditionalErrorMessage: Story = {
  args: {
    register: regMock,
    error: false,
    name: 'testInput',
    required: false,
    multiline: false,
    placeholder: 'default input',
    additiontalErrorMessages: [
      {
        isShowing: true,
        errorMessage: 'First name cannot exceed 150 characters',
      },
    ],
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
    error: false,
    name: 'cardInput',
    required: false,
    multiline: false,
    placeholder: 'default input',
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
    error: false,
    name: 'cardInput',
    required: false,
    multiline: false,
    placeholder: 'default input',
  },
};
export const OnCardMultiline: Story = {
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  args: {
    register: regMock,
    error: false,
    name: 'NestedCardInput',
    required: false,
    multiline: true,
    placeholder: 'default input',
  },
};
export const OnNestedCardMultiline: Story = {
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
    error: false,
    name: 'NestedCardInput',
    required: false,
    multiline: true,
    placeholder: 'default input',
  },
};

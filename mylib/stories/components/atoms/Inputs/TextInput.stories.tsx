import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextInput from '../../../../src/components/atoms/Inputs/TextInput';

import Card from '../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof TextInput> = {
  title: 'Components/atoms/Inputs/TextInput',
  component: TextInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextInput>;

const regMock = (text, any) => {};
export const Default: Story = {
  args: {
    name: 'testInput',
    multiline: false,
    placeholder: 'default input',
  },
};
export const Multiline: Story = {
  args: {
    name: 'testInput',
    multiline: true,
    placeholder: 'multiline input',
  },
};

export const Password: Story = {
  args: {
    name: 'testInput',
    multiline: false,
    placeholder: 'default input',
    password: true,
  },
};
export const Error: Story = {
  args: {
    name: 'testInput',
    multiline: false,
    placeholder: 'default input',
  },
};
export const MultilineError: Story = {
  args: {
    name: 'testInput',
    multiline: true,
    placeholder: 'multiline input',
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
    name: 'testInput',
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
    name: 'testInput',
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
    name: 'testInput',
    multiline: true,
    placeholder: 'multiline input',
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
    name: 'testInput',
    multiline: true,
    placeholder: 'multiline input',
  },
};

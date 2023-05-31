import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../../src/components/molecules/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/molecules/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    children: {
      defaultValue: 'default val',
    },
    refreshFunc: {
      action: 'Using refresh function',
      description: 'Refresh function activated',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    children: 'Error message...',
  },
};
export const Centered: Story = {
  args: {
    children: 'Error message...',
    center: true,
  },
};
export const LongMessage: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur ipsum illum. Inventore neque obcaecati fugiat reprehenderit molestias rerum pariatur, mollitia eum praesentium veritatis non? Rerum, delectus obcaecati vero laudantium explicabo maiores minus! Atque aut, rerum magni expedita voluptas ullam quae. Autem dolor consequuntur sunt repellat nam quisquam doloremque obcaecati!',
  },
};

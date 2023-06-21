import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StagedProgressbar from '../../../src/components/atoms/Progressbar/StagedProgressbar';

const meta: Meta<typeof StagedProgressbar> = {
  title: 'Components/atoms/StagedProgressbar',
  component: StagedProgressbar,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StagedProgressbar>;

export const Default: Story = {
  args: {
    stages: ['first', 'second', 'third'],
  },
};
export const First: Story = {
  args: {
    stages: ['first', 'second', 'third'],
    progress: 1,
  },
};
export const Second: Story = {
  args: {
    stages: ['first', 'second', 'third'],
    progress: 2,
  },
};

export const Complete: Story = {
  args: {
    stages: ['first', 'second', 'third'],
    progress: 3,
  },
};
export const Single: Story = {
  args: {
    stages: ['first'],
    progress: 1,
  },
};

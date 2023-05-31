import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TestingBanner from '../../src/components/molecules/TestingBanner';

const meta: Meta<typeof TestingBanner> = {
  title: 'Components/molecules/TestingBanner',
  component: TestingBanner,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TestingBanner>;

export const Default: Story = {
  args: {},
};

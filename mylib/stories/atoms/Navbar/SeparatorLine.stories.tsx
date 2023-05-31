import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SeparatorLine from '../../../src/components/atoms/Navbar/SeparatorLine';

const meta: Meta<typeof SeparatorLine> = {
  title: 'Components/atoms/Navbar/SeparatorLine',
  component: SeparatorLine,
};
export default meta;

type Story = StoryObj<typeof SeparatorLine>;

export const WithText: Story = {
  args: {
    children: 'Separator  line',
  },
};

export const NoText: Story = {
  args: {},
};

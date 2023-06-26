import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SeparatorLine from '../../../../src/components/atoms/Navbar/SeparatorLine';
import Card from '../../../../src/components/atoms/Cards/Card';

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
export const NoPadding: Story = {
  args: { noPaddingX: true },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <Card>
        <div style={{ height: '20rem', width: '3rem' }}>
          <Story />
        </div>
      </Card>
    ),
  ],
  args: { isVertical: true },
};

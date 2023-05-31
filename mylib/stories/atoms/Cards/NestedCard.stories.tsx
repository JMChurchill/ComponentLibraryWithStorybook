import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NestedCard from '../../../src/components/atoms/Cards/NestedCard';
import Card from '../../../src/components/atoms/Cards/Card';

const meta: Meta<typeof NestedCard> = {
  title: 'Components/atoms/Cards/NestedCard',
  component: NestedCard,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NestedCard>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2>Card contents</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          odio minima quis facere omnis accusantium facilis illo, vel quia
          excepturi?
        </p>
      </>
    ),
  },
};
export const InsideCardWrapper: Story = {
  decorators: [
    Story => (
      <Card>
        <h1>Parent Card</h1>
        <Story />
      </Card>
    ),
  ],
  args: {
    children: (
      <>
        <h2>Card contents</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          odio minima quis facere omnis accusantium facilis illo, vel quia
          excepturi?
        </p>
      </>
    ),
  },
};

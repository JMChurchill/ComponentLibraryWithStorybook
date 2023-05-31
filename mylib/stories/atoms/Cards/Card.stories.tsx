import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from '../../../src/components/atoms/Cards/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/atoms/Cards/Card',
  component: Card,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

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

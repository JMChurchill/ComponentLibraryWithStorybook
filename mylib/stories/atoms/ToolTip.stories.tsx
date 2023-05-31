import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToolTip from '../../src/components/atoms/ToolTip/ToolTip';

const meta: Meta<typeof ToolTip> = {
  title: 'Components/atoms/ToolTip',
  component: ToolTip,
  argTypes: {
    children: {
      defaultValue: 'default val',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
  args: {
    children: <p>tool</p>,
    text: 'tip!',
  },
};
export const NoTextWrapping: Story = {
  args: {
    children: <p>tool</p>,
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas hic iusto nesciunt error atque rem voluptatibus odit ut quam incidunt aperiam veniam repellat quisquam aut rerum eius aspernatur, magnam assumenda.',
    nowrap: true,
    position: 'right',
  },
};

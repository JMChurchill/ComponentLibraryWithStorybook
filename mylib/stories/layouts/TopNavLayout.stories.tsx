import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TopNavLayout from '../../src/Layouts/TopNavLayout';

const meta: Meta<typeof TopNavLayout> = {
  title: 'Layouts/TopNavLayout',
  component: TopNavLayout,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TopNavLayout>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ backgroundColor: '#bfdbfe', padding: '1rem' }}>
          Topnav
        </div>
        <div style={{ backgroundColor: '#fecaca', padding: '1rem' }}>
          Contents
        </div>
      </>
    ),
  },
};

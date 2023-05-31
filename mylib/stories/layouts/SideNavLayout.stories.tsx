import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SideNavLayout from '../../src/Layouts/SideNavLayout';

const meta: Meta<typeof SideNavLayout> = {
  title: 'Layouts/SideNavLayout',
  component: SideNavLayout,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SideNavLayout>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ backgroundColor: '#bfdbfe', padding: '1rem' }}>
          Sidenav
        </div>
        <div style={{ backgroundColor: '#fecaca', padding: '1rem' }}>
          Contents
        </div>
      </>
    ),
  },
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ExternalLink from '../../../../../src/components/atoms/Navbar/Links/ExternalLink';
import { IoAdd } from 'react-icons/io5';

const meta: Meta<typeof ExternalLink> = {
  title: 'Components/atoms/Navbar/Links/ExternalLink',
  component: ExternalLink,
};
export default meta;

type Story = StoryObj<typeof ExternalLink>;

/** All props are active or in use */
export const AllOn: Story = {
  decorators: [
    Story => (
      <div style={{ width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Main Link',
    icon: IoAdd,
    to: 'https://www.google.co.uk/',
    notifications: 3,
    showNav: true,
  },
};

/** The link is displayed in the primary colour when it's active */
export const Active: Story = {
  args: {
    children: 'Main Link',
    icon: IoAdd,
    to: '/link',
    showNav: true,
  },
};

export const Inactive: Story = {
  args: {
    children: 'Main Link',
    icon: IoAdd,
    to: '/link',
    showNav: true,
  },
};

/** Just the link icon is displayed when the nav is minimised */
export const Minified: Story = {
  decorators: [
    Story => (
      <div style={{ width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Main Link',
    icon: IoAdd,
    to: '/link',
    showNav: false,
  },
};
/** A primary coloured pill is displayed when there are more than 0 notifications. */
export const MinifiedWithNotification: Story = {
  decorators: [
    Story => (
      <div style={{ width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Main Link',
    icon: IoAdd,
    to: '/link',
    notifications: 3,
    showNav: false,
  },
};

/** A link with no notifications. */
export const NoNotifications: Story = {
  args: {
    children: 'Main Link',
    icon: IoAdd,
    to: '/link',
    showNav: true,
  },
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SubLink from '../../../../../src/components/atoms/Navbar/Links/SubLink';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof SubLink> = {
  title: 'Components/atoms/Navbar/Links/SubLink',
  component: SubLink,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof SubLink>;

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
    to: '/link',
    notifications: 3,
    isCurrent: true,
    showNav: true,
  },
};

/** The link is displayed in the primary colour when it's active */
export const Active: Story = {
  args: {
    children: 'Main Link',
    to: '/link',
    isCurrent: false,
    showNav: true,
  },
};

export const Inactive: Story = {
  args: {
    children: 'Main Link',
    to: '/link',
    isCurrent: true,
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
    to: '/link',
    isCurrent: false,
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
    to: '/link',
    notifications: 3,
    isCurrent: false,
    showNav: false,
  },
};

/** A link with no notifications. */
export const NoNotifications: Story = {
  args: {
    children: 'Main Link',
    to: '/link',
    isCurrent: false,
    showNav: true,
  },
};

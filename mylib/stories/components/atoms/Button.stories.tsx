import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../../../src/components/atoms/Button';
import { IoAdd, IoPencil } from 'react-icons/io5';

const meta: Meta<typeof Button> = {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'default val',
    },
    onClick: { action: 'handleClick', description: 'The buttons function' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

/** This button should be used for primary actions that make a content change */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'button text',
  },
};

/** This button should be used for secondary actions, for example going back a page */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
};

/** Icon buttons can be used to better symbolize what the action is doing */
export const AddIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Add',
    icon: IoAdd,
  },
};

export const EditIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Edit',
    icon: IoPencil,
  },
};

/** Icons can be displayed before or after the buttons text */
export const IconBefore: Story = {
  args: {
    variant: 'primary',
    children: 'Icon to the left',
    icon: IoPencil,
    position: 'before',
  },
};

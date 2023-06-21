import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DropDown from '../../../../src/components/atoms/Inputs/DropDown';
import Card from '../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof DropDown> = {
  title: 'Components/atoms/Inputs/Dropdown',
  component: DropDown,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DropDown>;

const DropdownTemplate: Story = {
  render: ({ name, options, ...args }) => {
    const [value, setValue] = useState('');

    return (
      <div>
        <p>Value: {value}</p>
        <DropDown
          name={name}
          value={value}
          setValue={setValue}
          options={options}
        />
      </div>
    );
  },
};

export const Default: Story = {
  ...DropdownTemplate,
  args: {
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};
export const Empty: Story = {
  ...DropdownTemplate,
  args: {
    name: 'drop',
    options: [],
  },
};
export const Multivalues: Story = {
  ...DropdownTemplate,
  args: {
    name: 'drop',
    options: [
      { value: '1', label: 'opt 1' },
      { value: '2', label: 'opt 2' },
      { value: '3', label: 'opt 3' },
    ],
  },
};

export const Error: Story = {
  ...DropdownTemplate,
  args: {
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};

export const OnCard: Story = {
  ...DropdownTemplate,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  args: {
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};

export const OnNestedCard: Story = {
  ...DropdownTemplate,
  decorators: [
    (Story) => (
      <Card>
        <NestedCard>
          <Story />
        </NestedCard>
      </Card>
    ),
  ],
  args: {
    name: 'drop',
    options: [{ value: '1', label: 'opt 1' }],
  },
};

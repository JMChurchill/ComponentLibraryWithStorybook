import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DateInput from '../../../../src/components/atoms/Inputs/DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'Components/atoms/Inputs/DateInput',
  component: DateInput,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DateInput>;

const DateInputTemplate: Story = {
  render: ({ name, max, min, ...args }) => {
    const [value, setValue] = useState<string | undefined>();

    return (
      <div>
        {max && <p>Max: {max}</p>}
        {min && <p>Min: {min}</p>}
        <p>Value: {value}</p>
        <DateInput
          name={name}
          value={value}
          setValue={setValue}
          max={max}
          min={min}
        />
      </div>
    );
  },
};

export const Default: Story = {
  ...DateInputTemplate,
  args: {
    name: 'dateSel',
  },
};
export const min: Story = {
  ...DateInputTemplate,
  args: {
    name: 'dateSel',
    min: new Date().toISOString().slice(0, 10),
  },
};
export const max: Story = {
  ...DateInputTemplate,
  args: {
    name: 'dateSel',
    max: new Date().toISOString().slice(0, 10),
  },
};
const yesterday = new Date();
export const minMax: Story = {
  ...DateInputTemplate,
  args: {
    name: 'dateSel',
    min: new Date(yesterday.setDate(yesterday.getDate() - 7))
      .toISOString()
      .slice(0, 10),
    max: new Date().toISOString().slice(0, 10),
  },
};
export const Error: Story = {
  ...DateInputTemplate,
  args: {
    name: 'dateSel',
  },
};

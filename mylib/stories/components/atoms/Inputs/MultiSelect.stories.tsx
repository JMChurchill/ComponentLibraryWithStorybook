import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MultiSelect from '../../../../src/components/atoms/Inputs/MultiSelect';

import Card from '../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/atoms/Inputs/MultiSelect',
  component: MultiSelect,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MultiSelect>;

const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'james' },
  { id: 3, name: 'jack' },
];

const MultiselectTemplate: Story = {
  render: ({ name, options, placeholder, error = false, ...args }) => {
    const [selectedValues, setSelectedValues] = useState<any>([]);
    useEffect(() => {
      console.log(selectedValues);
    }, [selectedValues]);
    return (
      <div>
        {selectedValues?.map((v) => (
          <p>{v.label}</p>
        ))}
        <MultiSelect
          name={name}
          placeholder={placeholder}
          value={selectedValues}
          setValue={setSelectedValues}
          options={options}
          error={error}
        />
      </div>
    );
  },
};

export const Default: Story = {
  ...MultiselectTemplate,
  args: {
    name: 'people',
    placeholder: 'Select a person',
    options: people.map((name) => {
      return { value: name.id, label: name.name };
    }),
  },
};
export const Error: Story = {
  ...MultiselectTemplate,
  args: {
    name: 'people',
    placeholder: 'Select a person',
    options: people.map((name) => {
      return { value: name.id, label: name.name };
    }),
    error: true,
  },
};

export const OnCard: Story = {
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  ...MultiselectTemplate,
  args: {
    name: 'people',
    placeholder: 'Select a person',
    options: people.map((name) => {
      return { value: name.id, label: name.name };
    }),
  },
};
export const OnNestedCard: Story = {
  decorators: [
    (Story) => (
      <Card>
        <NestedCard scrollable={false}>
          <Story />
        </NestedCard>
      </Card>
    ),
  ],
  ...MultiselectTemplate,
  args: {
    name: 'people',
    placeholder: 'Select a person',
    options: people.map((name) => {
      return { value: name.id, label: name.name };
    }),
  },
};

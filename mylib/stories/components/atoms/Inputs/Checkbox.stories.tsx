import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../../src/components/atoms/Inputs/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/atoms/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxTemplate: Story = {
  render: ({
    children,
    value,
    name,
    groupName,
    currentValue: cVal,
    ...args
  }) => {
    const [currentValue, setCurrentValue] = useState(cVal ?? '');

    useEffect(() => {
      setCurrentValue(cVal ?? '');
    }, [cVal]);
    return (
      <div>
        <p>Value: {currentValue}</p>
        <Checkbox
          groupName={groupName}
          name={name}
          value={value}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        >
          {children}
        </Checkbox>
      </div>
    );
  },
};
export const Default: Story = {
  ...CheckboxTemplate,
  args: {
    groupName: 'testGroup',
    name: 'Checkbox',
    value: '1',
    children: 'Default box',
    currentValue: '',
  },
};

const MultipleCheckboxes = () => {
  const [value, setValue] = useState('1');
  return (
    <div>
      <p>Value: {value}</p>
      <Checkbox
        groupName="one"
        name="multiGroup"
        value={'1'}
        currentValue={value}
        setCurrentValue={setValue}
      >
        One
      </Checkbox>
      <Checkbox
        groupName="two"
        name="multiGroup"
        value={'2'}
        currentValue={value}
        setCurrentValue={setValue}
      >
        Two
      </Checkbox>
    </div>
  );
};

type MultiStory = StoryObj<typeof MultipleCheckboxes>;

export const Multiple: MultiStory = {
  render: () => <MultipleCheckboxes />,
};

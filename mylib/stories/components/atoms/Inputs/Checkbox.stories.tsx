import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../../../../src/components/atoms/Inputs/RadioButton';
import Card from '../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/atoms/Inputs/RadioButton',
  component: RadioButton,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

const RadioButtonTemplate: Story = {
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
        <RadioButton
          groupName={groupName}
          name={name}
          value={value}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        >
          {children}
        </RadioButton>
      </div>
    );
  },
};
export const Default: Story = {
  ...RadioButtonTemplate,
  args: {
    groupName: 'testGroup',
    name: 'RadioButton',
    value: '1',
    children: 'Default box',
    currentValue: '',
  },
};

const MultipleRadioButton = () => {
  const [value, setValue] = useState('1');
  return (
    <div>
      <p>Value: {value}</p>
      <RadioButton
        groupName="one"
        name="multiGroup"
        value={'1'}
        currentValue={value}
        setCurrentValue={setValue}
      >
        One
      </RadioButton>
      <RadioButton
        groupName="two"
        name="multiGroup"
        value={'2'}
        currentValue={value}
        setCurrentValue={setValue}
      >
        Two
      </RadioButton>
    </div>
  );
};

type MultiStory = StoryObj<typeof MultipleRadioButton>;

export const Multiple: MultiStory = {
  render: () => <MultipleRadioButton />,
};

export const OnCard: Story = {
  ...RadioButtonTemplate,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  args: {
    groupName: 'testCardGroup',
    name: 'RadioCardButton',
    value: '1',
    children: 'Default box',
    currentValue: '',
  },
};
export const OnNestedCard: Story = {
  ...RadioButtonTemplate,
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
    groupName: 'testNestedGroup',
    name: 'RadioNestedButton',
    value: '1',
    children: 'Default box',
    currentValue: '',
  },
};

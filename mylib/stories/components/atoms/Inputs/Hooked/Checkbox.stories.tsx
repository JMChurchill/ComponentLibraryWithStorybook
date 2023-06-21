import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../../../../../src/components/atoms/Inputs/Hooked/RadioButtonHooked';
import Card from '../../../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/atoms/Inputs/Hooked/RadioButton',
  component: RadioButton,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

const regMock = (text, any) => {};
export const Default: Story = {
  args: {
    register: regMock,
    groupName: 'testGroup',
    error: null,
    name: 'RadioButton',
    required: false,
    value: 'true',
    children: 'Default box',
  },
};

const MultipleRadioButton = () => {
  return (
    <div>
      <RadioButton
        groupName="one"
        name="multiGroup"
        required={false}
        value={'1'}
        register={regMock}
      >
        One
      </RadioButton>
      <RadioButton
        groupName="two"
        name="multiGroup"
        required={false}
        value={'2'}
        register={regMock}
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
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  args: {
    register: regMock,
    groupName: 'testCardGroup',
    error: null,
    name: 'RadioCardButton',
    required: false,
    value: 'true',
    children: 'Default box',
  },
};
export const OnNestedCard: Story = {
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
    register: regMock,
    groupName: 'testNestedGroup',
    error: null,
    name: 'RadioNestedButton',
    required: false,
    value: 'true',
    children: 'Default box',
  },
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from '../../../src/components/atoms/ThemeProvider';
import Card from '../../../src/components/atoms/Cards/Card';
import TextInput from '../../../src/components/atoms/Inputs/TextInput';
import { Default } from './Inputs/TextInput.stories';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/atoms/ThemeProvider',
  component: ThemeProvider,
};
export default meta;

type Story = StoryObj<typeof ThemeProvider>;

/** A card component rendered within a theme provider.
 * Changing the theme should change the coulour of the card
 */
export const CardContainingStuff: Story = {
  args: {
    children: (
      <Card>
        <h2>Stuff</h2>
      </Card>
    ),
  },
};
export const DarkTextInput: Story = {
  args: {
    theme: 'dark',
    children: (
      <Card>
        <h1>Dark Text input 👇🏼</h1>
        <TextInput {...Default.args} />
      </Card>
    ),
  },
};

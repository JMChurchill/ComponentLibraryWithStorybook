import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ThemePicker from '../../../src/components/molecules/ThemePicker';
import ThemeItem from '../../../src/components/atoms/ThemePicker/ThemeItem';
import Card from '../../../src/components/atoms/Cards/Card';
import NestedCard from '../../../src/components/atoms/Cards/NestedCard';

const meta: Meta<typeof ThemePicker> = {
  title: 'Components/molecules/ThemePicker',
  component: ThemePicker,
  argTypes: {},
  decorators: [
    Story => {
      return (
        <Card>
          <h2>Themes</h2>
          <NestedCard>
            <Story />
          </NestedCard>
        </Card>
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof ThemePicker>;

export const Default: Story = {
  args: {
    children: [
      <ThemeItem
        theme={{
          id: 1,
          name: 'Default',
          primary: 'hsl(350, 79%, 57%)',
          primaryTransparent: 'hsla(350, 79%, 57%, 0.7)',
          backgroundColor: '#0d1117',
          forgroundColor: 'hsl(214, 22%, 13%)',
          forgroundHoverColor: 'hsl(214, 21%, 20%)',
          forgroundHoverHoverColor: 'hsl(214, 21%, 30%)',
          textBase: '#ffffff',
          textSecondary: 'hsl(0, 0%, 80%)',
        }}
      />,
      <ThemeItem
        theme={{
          id: 2,
          name: 'Light',
          primary: 'hsl(350, 79%, 57%)',
          primaryTransparent: 'hsla(350, 79%, 57%, 0.7)',
          backgroundColor: 'rgb(247, 247, 247)',
          forgroundColor: 'white',
          forgroundHoverColor: 'rgb(243, 243, 243)',
          forgroundHoverHoverColor: 'rgb(228, 228, 228)',
          textBase: 'black',
          textSecondary: 'hsl(0, 0%, 20%)',
        }}
      />,
      <ThemeItem
        theme={{
          id: 3,
          name: 'Classic',
          primary: '#40a630',
          primaryTransparent: 'hsl(112, 55%, 42%, 0.7)',
          backgroundColor: '#252526',
          forgroundColor: 'hsl(240, 3%, 25%)',
          forgroundHoverColor: 'hsl(240, 3%, 35%)',
          forgroundHoverHoverColor: 'hsl(240, 3%, 45%)',
          textBase: '#ffffff',
          textSecondary: 'hsl(0, 0%, 80%)',
        }}
      />,
      <ThemeItem
        theme={{
          id: 4,
          name: 'My Aardman',
          primary: '#3b88f1',
          primaryTransparent: 'hsl(215, 87%, 59%, 0.7)',
          backgroundColor: '#002b36',
          forgroundColor: '#073642',
          forgroundHoverColor: 'hsl(193, 42%, 22%)',
          forgroundHoverHoverColor: 'hsl(193, 42%, 32%)',
          textBase: '#ffffff',
          textSecondary: 'hsl(0, 0%, 80%)',
        }}
      />,
    ],
  },
};

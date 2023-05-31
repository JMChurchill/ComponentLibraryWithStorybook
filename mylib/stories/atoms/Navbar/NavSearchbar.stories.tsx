import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NavSearchbar from '../../../src/components/atoms/Navbar/NavSearchbar';
import { withRouter } from 'storybook-addon-react-router-v6';
import { useNavigate } from 'react-router-dom';

const meta: Meta<typeof NavSearchbar> = {
  title: 'Components/atoms/Navbar/NavSearchbar',
  component: NavSearchbar,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof NavSearchbar>;

export const WithText: Story = {
  decorators: [
    Story => {
      const [searchTerm, setSearchTerm] = useState('');

      return (
        <div style={{ width: 'fit-content' }}>
          <Story
            navigate={useNavigate}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      );
    },
  ],
  args: {
    showNav: true,
    searchEndpoint: '/search',
  },
};

export const Minimised: Story = {
  decorators: [
    Story => (
      <div style={{ width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  args: { showNav: false, searchEndpoint: '/search' },
};

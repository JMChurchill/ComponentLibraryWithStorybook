import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import SideNav from '../../../../src/components/molecules/Navbar/SideNav';
import SideNavLayout from '../../../../src/Layouts/SideNavLayout';
import MainLink from '../../../../src/components/atoms/Navbar/Links/MainLink';
import SeparatorLine from '../../../../src/components/atoms/Navbar/SeparatorLine';
import ExternalLink from '../../../../src/components/atoms/Navbar/Links/ExternalLink';
import {
  MdDashboard,
  MdHome,
  MdManageAccounts,
  MdOutlineDeviceHub,
  MdOutlineSell,
  MdOutlineStyle,
  MdPeople,
  MdSettings,
} from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';

const meta: Meta<typeof SideNav> = {
  title: 'Components/molecules/Navbar/SideNav',
  component: SideNav,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  decorators: [
    Story => (
      <SideNavLayout>
        <Story />
        {/* <Outlet /> */}
      </SideNavLayout>
    ),
  ],
  args: {
    // had to add this as an array as a single object is expected -> in practice simply nest the components inside the Sidnav element
    children: [
      <MainLink icon={MdDashboard} to={'/'}>
        Dashboard
      </MainLink>,

      <SeparatorLine>With Notifications</SeparatorLine>,

      <MainLink icon={MdOutlineSell} to={'/Products'} notifications={10}>
        Products
      </MainLink>,
      <MainLink icon={MdOutlineDeviceHub} to={'/AllVariants'} notifications={0}>
        Variants
      </MainLink>,
      <MainLink icon={FiPackage} to={'/AllPackaging'} notifications={300}>
        Packaging
      </MainLink>,

      <SeparatorLine>Without Notifications</SeparatorLine>,

      <MainLink icon={MdManageAccounts} to={'/Agents'}>
        Agents
      </MainLink>,
      <MainLink icon={MdSettings} to={'/Settings'}>
        Settings
      </MainLink>,
      <SeparatorLine>External Links</SeparatorLine>,
      <ExternalLink
        icon={MdOutlineStyle}
        to={'https://styleguidesadmin.aardman.com/'}
        inNewTab={true}
      >
        Styleguides
      </ExternalLink>,
      <ExternalLink
        icon={MdPeople}
        to={'https://www.aardman.com/'}
        inNewTab={true}
      >
        Agent Portal
      </ExternalLink>,
    ],
    title: 'Side Nav',
    searchEndpoint: '/search',
  },
};

export const NoSearchbar: Story = {
  decorators: [
    Story => (
      <SideNavLayout>
        <Story />
      </SideNavLayout>
    ),
  ],
  args: {
    // had to add this as an array as a single object is expected -> in practice simply nest the components inside the Sidnav element
    children: [
      <MainLink icon={MdOutlineSell} to={'/Products'}>
        Products
      </MainLink>,
      <MainLink icon={MdOutlineDeviceHub} to={'/AllVariants'}>
        Variants
      </MainLink>,
      <MainLink icon={FiPackage} to={'/AllPackaging'}>
        Packaging
      </MainLink>,
    ],
    title: 'Side Nav',
  },
};

export const Notifications: Story = {
  decorators: [
    Story => (
      <SideNavLayout>
        <Story />
      </SideNavLayout>
    ),
  ],
  args: {
    // had to add this as an array as a single object is expected -> in practice simply nest the components inside the Sidnav element
    children: [
      <MainLink icon={MdOutlineSell} to={'/Products'} notifications={10}>
        Products
      </MainLink>,
      <MainLink icon={MdOutlineDeviceHub} to={'/AllVariants'} notifications={0}>
        Variants
      </MainLink>,
      <MainLink icon={FiPackage} to={'/AllPackaging'} notifications={300}>
        Packaging
      </MainLink>,
    ],
    title: 'Side Nav',
    searchEndpoint: '/search',
  },
};

export const NoNotifications: Story = {
  decorators: [
    Story => (
      <SideNavLayout>
        <Story />
      </SideNavLayout>
    ),
  ],
  args: {
    // had to add this as an array as a single object is expected -> in practice simply nest the components inside the Sidnav element
    children: [
      <MainLink icon={MdOutlineSell} to={'/Products'}>
        Products
      </MainLink>,
      <MainLink icon={MdOutlineDeviceHub} to={'/AllVariants'}>
        Variants
      </MainLink>,
      <MainLink icon={FiPackage} to={'/AllPackaging'}>
        Packaging
      </MainLink>,
    ],
    title: 'Side Nav',
    searchEndpoint: '/search',
  },
};

export const ExternalLinks: Story = {
  decorators: [
    Story => (
      <SideNavLayout>
        <Story />
      </SideNavLayout>
    ),
  ],
  args: {
    // had to add this as an array as a single object is expected -> in practice simply nest the components inside the Sidnav element
    children: [
      <ExternalLink icon={MdOutlineSell} to={'/Products'}>
        Products
      </ExternalLink>,
      <ExternalLink icon={MdOutlineDeviceHub} to={'/AllVariants'}>
        Variants
      </ExternalLink>,
      <ExternalLink icon={FiPackage} to={'/AllPackaging'}>
        Packaging
      </ExternalLink>,
    ],
    title: 'Side Nav',
    searchEndpoint: '/search',
  },
};

export const SeperatorLines: Story = {
  decorators: [
    Story => (
      <SideNavLayout>
        <Story />
      </SideNavLayout>
    ),
  ],
  args: {
    // had to add this as an array as a single object is expected -> in practice simply nest the components inside the Sidnav element
    children: [
      <MainLink icon={MdDashboard} to={'/'}>
        Dashboard
      </MainLink>,
      <SeparatorLine>These</SeparatorLine>,
      <MainLink icon={MdOutlineSell} to={'/Products'} notifications={10}>
        Products
      </MainLink>,
      <SeparatorLine>are</SeparatorLine>,
      <MainLink icon={MdOutlineSell} to={'/Products'} notifications={10}>
        Variants
      </MainLink>,
      <SeparatorLine>separator</SeparatorLine>,
      <MainLink icon={MdOutlineSell} to={'/Products'} notifications={10}>
        Packaging
      </MainLink>,
      <SeparatorLine>lines</SeparatorLine>,
      <MainLink icon={MdOutlineSell} to={'/Products'} notifications={10}>
        Agents
      </MainLink>,
    ],
    title: 'Side Nav',
    searchEndpoint: '/search',
  },
};

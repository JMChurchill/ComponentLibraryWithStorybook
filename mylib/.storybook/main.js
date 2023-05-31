module.exports = {
  // stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook-addon-react-router-v6',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

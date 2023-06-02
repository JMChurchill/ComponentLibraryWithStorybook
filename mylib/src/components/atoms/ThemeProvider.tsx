import React, { ReactNode } from 'react';

type ThemeProvider = {
  children: ReactNode;
  theme?: 'dark' | 'light';
};
/** Wrap components in this theme provider to adjust their theme */
const ThemeProvider = ({ children, theme = 'light' }: ThemeProvider) => {
  return <div className={theme === 'dark' ? 'theme-dark' : ''}>{children}</div>;
};

export default ThemeProvider;

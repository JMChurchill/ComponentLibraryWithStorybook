import React, { ReactNode, useEffect } from 'react';
import { useLocalStorage } from '../../../Hooks/useStorage';
import { ThemeType } from '../../molecules/ThemePicker';

type ThemeProvider = {
  children: ReactNode;
};
/** Wrap components in this theme provider to adjust their theme */
const ThemeProvider = ({ children }: ThemeProvider) => {
  const [selectedTheme] = useLocalStorage<ThemeType | null>('theme', null);

  const setTheme = (theme: ThemeType | null | undefined) => {
    if (theme) {
      const {
        primary,
        primaryLight,
        primaryDark,
        primaryTransparent,
        backgroundColor,
        forgroundColor,
        forgroundHoverColor,
        forgroundHoverHoverColor,
        textBase,
        textSecondary,
      } = theme;
      document.documentElement.style.setProperty('--color-text-base', textBase);
      document.documentElement.style.setProperty(
        '--color-text-secondary',
        textSecondary
      );
      document.documentElement.style.setProperty('--color-primary', primary);
      document.documentElement.style.setProperty(
        '--color-primary-dark',
        primaryDark
      );
      document.documentElement.style.setProperty(
        '--color-primary-light',
        primaryLight
      );
      document.documentElement.style.setProperty(
        '--color-primary-transparent',
        primaryTransparent
      );
      document.documentElement.style.setProperty(
        '--color-page-background',
        backgroundColor
      );
      document.documentElement.style.setProperty(
        '--color-page-forground',
        forgroundColor
      );
      document.documentElement.style.setProperty(
        '--color-page-forground-hover',
        forgroundHoverColor
      );
      document.documentElement.style.setProperty(
        '--color-page-forground-hover-hover',
        forgroundHoverHoverColor
      );
    }
  };

  useEffect(() => {
    setTheme(selectedTheme);
  }, []);
  return <>{children}</>;
};

export default ThemeProvider;

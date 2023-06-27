import React, { Children, ReactElement, ReactNode, useEffect } from 'react';
import { useLocalStorage } from '../../Hooks/useStorage';

type ThemePickerProps = {
  children: ReactNode[];
};

export type ThemeType = {
  id: number;
  name: string;
  primary: string;
  primaryTransparent: string;
  primaryDark: string;
  primaryLight: string;
  backgroundColor: string;
  forgroundColor: string;
  forgroundHoverColor: string;
  forgroundHoverHoverColor: string;
  textBase: string;
  textSecondary: string;
};

const ThemePicker = ({ children }: ThemePickerProps) => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<ThemeType | null>(
    'theme',
    null
  );

  const setTheme = (theme: ThemeType | null | undefined) => {
    if (theme) {
      const {
        primary,
        primaryTransparent,
        primaryDark,
        primaryLight,
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
        '--color-primary-transparent',
        primaryTransparent
      );
      document.documentElement.style.setProperty(
        '--color-primary-dark',
        primaryDark
      );
      document.documentElement.style.setProperty(
        '--color-primary-light',
        primaryLight
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
  }, [selectedTheme]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            selectedTheme,
            setSelectedTheme,
          });
        } else return <></>;
      })}
    </div>
  );
};

export default ThemePicker;

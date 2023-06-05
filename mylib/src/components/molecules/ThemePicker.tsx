import React, { Children, ReactElement, ReactNode, useEffect } from 'react';
import { useLocalStorage } from '../../Hooks/useStorage';
import Card from '../atoms/Cards/Card';
import NestedCard from '../atoms/Cards/NestedCard';

type ThemePickerProps = {
  children: ReactNode[];
};

export type ThemeType = {
  id: number;
  name: string;
  primary: string;
  primaryTransparent: string;
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
    <Card>
      <h2>Themes</h2>
      <NestedCard>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as ReactElement<any>, {
                selectedTheme,
                setSelectedTheme,
              });
            } else return <></>;
          })}
        </div>
      </NestedCard>
    </Card>
  );
};

export default ThemePicker;

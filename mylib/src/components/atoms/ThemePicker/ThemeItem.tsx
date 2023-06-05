import React from 'react';
import { ThemeType } from '../../molecules/ThemePicker';

type ThemeItemProps = {
  theme: ThemeType;
  selectedTheme?: ThemeType | null;
  setSelectedTheme?: (theme: ThemeType | null) => void;
};
const ThemeItem = ({
  theme,
  selectedTheme = null,
  setSelectedTheme = (_theme: ThemeType | null) => {},
}: ThemeItemProps) => {
  const {
    id,
    name,
    primary,
    backgroundColor,
    forgroundColor,
    // forgroundHoverColor,
    // forgroundHoverHoverColor,
    textBase,
    textSecondary,
  } = theme;
  return (
    <div
      className={`rounded-md outline outline-offset-0 cursor-pointer transition-all duration-75 shadow-md ${
        selectedTheme && id === selectedTheme.id
          ? 'outline-2 outline-skin-primary outline-offset-2'
          : 'outline-none'
      }`}
      style={{ backgroundColor: backgroundColor }}
      onClick={() => setSelectedTheme(theme)}
    >
      <div
        className={`rounded-md p-2`}
        style={{ backgroundColor: forgroundColor }}
      >
        <h4 style={{ color: textBase }}>{name}</h4>
      </div>
      <div className="p-2">
        <p style={{ color: textSecondary }}>Lorem ipsum dolor sit.</p>
        <div className="flex flex-row gap-4 py-2">
          <div
            className="w-10 h-6 rounded-md border-2"
            style={{ borderColor: primary }}
          ></div>
          <div
            className="w-10 h-6 rounded-md"
            style={{ backgroundColor: primary }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeItem;

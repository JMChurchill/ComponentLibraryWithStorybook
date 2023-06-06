import React, { HTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide text for the button */
  children: string;
  /** Which style would you like to use? */
  variant?: 'primary' | 'secondary';
  /** Provide an icon for the button */
  icon?: IconType | undefined;
  /** Should the icon be before or after the text */
  position?: 'before' | 'after';
}
const Button = ({
  children,
  variant = 'primary',
  icon: Icon = undefined,
  position = 'after',
  ...props
}: Props) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-skin-primary text-button-base hover:bg-transparent hover:text-button-inverted'
          : 'bg-transparent text-skin-primary hover:bg-skin-primary hover:text-white'
      }  flex cursor-pointer flex-row gap-2 rounded-md border-2 border-skin-primary p-1 px-2 font-bold transition-all`}
      {...props}
    >
      {position === 'before' && Icon && <Icon size={20} />}
      {children}
      {position === 'after' && Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;

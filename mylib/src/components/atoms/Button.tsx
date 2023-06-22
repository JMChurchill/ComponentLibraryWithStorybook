import React, { HTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';
import ClipLoader from 'react-spinners/ClipLoader';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide text for the button */
  children: string;
  /** Which style would you like to use? */
  variant?: 'primary' | 'secondary';
  /** Provide an icon for the button */
  icon?: IconType | undefined;
  /** Should the icon be before or after the text */
  position?: 'before' | 'after';
  /** Display loading icon on button */
  isLoading?: boolean;
  /** Disable button */
  disabled?: boolean;
}
const Button = ({
  children,
  variant = 'primary',
  icon: Icon = undefined,
  position = 'after',
  isLoading = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <button
      className={`${
        disabled
          ? 'cursor-not-allowed border-gray-300 bg-gray-300 text-white'
          : variant === 'primary'
          ? `bg-skin-primary text-button-base ${
              isLoading
                ? 'cursor-wait'
                : 'cursor-pointer hover:bg-transparent hover:text-button-inverted'
            }`
          : `bg-transparent text-skin-primary ${
              isLoading
                ? 'cursor-wait'
                : 'cursor-pointer hover:bg-skin-primary hover:text-white'
            } `
      }  flex flex-row items-center gap-2 rounded-md border-2 border-skin-primary p-1 px-2 font-bold transition-all`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <ClipLoader
          size={20}
          color={
            variant === 'primary'
              ? 'var(--color-button-text)'
              : 'var(--color-primary)'
          }
        />
      )}
      {position === 'before' && Icon && <Icon size={20} />}
      {children}
      {position === 'after' && Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;

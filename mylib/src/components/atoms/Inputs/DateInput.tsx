import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Name of the input */
  name: string;
  value: string | undefined;
  setValue: (value: string) => void;
  /** Min date */
  min?: string;
  /** Max date */
  max?: string;
  placeholder?: string;
}

const DateInput = ({
  name,
  min = undefined,
  max = undefined,
  value,
  setValue,
  placeholder,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className={`rounded-md border border-skin-forground-hover bg-skin-page-background px-2 py-1 text-skin-base shadow-inner outline-skin-primary
         transition-all duration-75 
         hover:outline hover:outline-1 hover:outline-skin-base 
         focus:border-transparent focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0`}
        type="date"
        id="start"
        name="trip-start"
        {...props}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default DateInput;

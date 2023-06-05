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
}

const DateInput = ({
  name,
  min = undefined,
  max = undefined,
  value,
  setValue,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className={`bg-skin-page-background shadow-inner rounded-md px-2 py-1 text-skin-base outline-skin-primary
         focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0 focus:border-none transition-all duration-75`}
        type="date"
        id="start"
        name="trip-start"
        {...props}
        placeholder="Select date"
        min={min}
        max={max}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default DateInput;

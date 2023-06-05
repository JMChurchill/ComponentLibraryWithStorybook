import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
  /** Name of registed item (ReactHookForm) */
  name: string;
  /** Register the component to the form (ReactHookForm) */
  register: any;
  /** Is this field required? (ReactHookForm) */
  required: any;
  /** Min date */
  min?: string | null;
  max?: string | null;
  /** Error object containing all errors from registered inputs */
  error: any;
}

const DateInput = ({
  name,
  register,
  min = null,
  max = null,
  required,
  error,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className={`bg-skin-page-background shadow-inner rounded-md px-2 py-1 text-skin-base outline-skin-primary
         focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0 focus:border-none transition-all duration-75`}
        type="date"
        {...register(name, { required: required })}
        id="start"
        name="trip-start"
        {...props}
        placeholder="Select date"
        min={min}
        max={max}
      />
      {error && <span className="text-red-600">This field is required</span>}
    </div>
  );
};

export default DateInput;

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
  placeholder?: string;
}

const DateInput = ({
  name,
  register,
  min = null,
  max = null,
  required,
  error,
  placeholder,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className={`rounded-md border border-skin-forground-hover bg-skin-page-background px-2 py-1 text-skin-base shadow-inner outline-skin-primary
         transition-all duration-75 
          hover:outline hover:outline-1 hover:outline-skin-base 
         focus:border-transparent focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0
         ${error ? 'border-2 border-red-500' : 'border-skin-forground-hover'}`}
        type="date"
        {...register(name, { required: required })}
        id="start"
        name="trip-start"
        {...props}
        placeholder={placeholder}
        min={min}
        max={max}
      />
      {error && <span className="text-red-600">This field is required</span>}
    </div>
  );
};

export default DateInput;

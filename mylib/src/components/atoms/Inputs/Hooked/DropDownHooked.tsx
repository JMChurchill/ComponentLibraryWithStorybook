import React from 'react';
import InputErrorMessage from '../ErrorMessage/InputErrorMessage';

type DropDownProps = {
  register: any;
  required: any;
  error?: any;
  selectedValue?: number | null;
  name: string;
  options: Option[];
};

export type Option = {
  value: number | string;
  label: string;
};
const DropDownHooked = ({
  name,
  options = [],
  selectedValue = null,
  register,
  required,
  error = null,
}: DropDownProps) => {
  return (
    <div className="flex flex-col">
      <select
        className={`block rounded-md border border-skin-forground-hover bg-skin-page-background px-2 py-1 text-skin-base shadow-inner transition-all duration-75 
        focus:border-transparent focus:outline-offset-2
        focus:outline-skin-primary focus:ring-0 ${
          error ? 'border-2 border-red-500' : 'border-skin-forground-hover'
        }`}
        name={name}
        {...register(name, { required: required })}
        title={name}
      >
        {!selectedValue ? <option></option> : <></>}

        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      {error && <InputErrorMessage>This field is required</InputErrorMessage>}
    </div>
  );
};

export default DropDownHooked;

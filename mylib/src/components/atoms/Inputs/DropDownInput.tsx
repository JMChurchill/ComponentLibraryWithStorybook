import React from 'react';

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
const DropDownInput = ({
  name,
  options = [],
  selectedValue = null,
  register,
  required,
  error = null,
}: DropDownProps) => {
  const errorStyle = {
    borderLeft: '3px solid red',
  };
  return (
    <div className="flex flex-col">
      <select
        className={`block bg-skin-page-background shadow-inner rounded-md px-2 py-1 text-skin-base outline-skin-primary`}
        name={name}
        style={error ? errorStyle : null}
        {...register(name, { required: required })}
        title={name}
      >
        {!selectedValue ? <option></option> : <></>}

        {options.map(op => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-600">This field is required</span>}
    </div>
  );
};

export default DropDownInput;
import React from 'react';

type DropDownProps = {
  name: string;
  /** useState value */
  value: string | number | undefined;
  /** useState setter */
  setValue: (value: any) => void;
  options: Option[];
  /** Is there an error? */
  error?: boolean;
};

type Option = {
  value: number | string;
  label: string;
};

const DropDown = ({
  value,
  setValue,
  name,
  options = [],
  error = false,
}: DropDownProps) => {
  return (
    <div className="flex flex-col">
      <select
        className={`block rounded-md border bg-skin-page-background px-2 py-1 text-skin-base shadow-inner transition-all duration-75 
        hover:outline hover:outline-1 hover:outline-skin-base
        focus:border-transparent focus:outline-2 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0
        ${error ? 'border-2 border-red-500' : 'border-skin-forground-hover'}`}
        name={name}
        title={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option></option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

import React from 'react';

type DropDownProps = {
  name: string;
  value: string;
  setValue: (value: string) => void;
  options: Option[];
};

type Option = {
  value: number | string;
  label: string;
};

const DropDown = ({ value, setValue, name, options = [] }: DropDownProps) => {
  return (
    <div className="flex flex-col">
      <select
        className={`block bg-skin-page-background shadow-inner border-none rounded-md px-2 py-1 text-skin-base focus:outline-skin-primary focus:outline-offset-2 focus:ring-0
        transition-all duration-75`}
        name={name}
        title={name}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <option></option>
        {options.map(op => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

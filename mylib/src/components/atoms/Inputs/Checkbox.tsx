import React from 'react';

type CheckboxProps = {
  /** Checkbox label */
  children: string;
  /** Name of registed item (ReactHookForm) */
  name: string;
  /** Used to group together multiple checkboxes */
  groupName: string;
  /** useState value */
  value: string;
  /** useState value */
  currentValue: string;
  /** useState setter */
  setCurrentValue: (value: string) => void;
};

import styles from './Hooked/Checkbox.module.css';

const Checkbox = ({
  children,
  name,
  groupName,
  value,
  currentValue,
  setCurrentValue,
}: CheckboxProps) => {
  return (
    <div className="w-full py-1">
      <label
        htmlFor={groupName}
        className={`grid gap-1 items-center cursor-pointer ${styles.form_control} `}
        style={{ gridTemplateColumns: '1.5rem auto' }}
      >
        <input
          type={'radio'}
          name={name}
          value={value}
          id={groupName}
          className="bg-skin-page-forground-hover outline outline-offset-0 border-none shadow-inner rounded-full grid place-content-center
          focus:ring-0 focus:outline outline-2 focus:outline-skin-primary focus:outline-offset-2 focus:shadow-none text-transparent 
          transition-all duration-75"
          checked={currentValue === value}
          onChange={e => setCurrentValue(e.target.value)}
        />
        {children}
      </label>
    </div>
  );
};

export default Checkbox;

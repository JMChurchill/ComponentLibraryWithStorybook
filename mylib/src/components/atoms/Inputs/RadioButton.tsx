import React from 'react';

type RadioButtonProps = {
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

const RadioButton = ({
  children,
  name,
  groupName,
  value,
  currentValue,
  setCurrentValue,
}: RadioButtonProps) => {
  return (
    <div className="w-full py-1">
      <label
        htmlFor={groupName}
        className={`grid cursor-pointer items-center gap-1 ${styles.form_control} `}
        style={{ gridTemplateColumns: '1.5rem auto' }}
      >
        <input
          type={'radio'}
          name={name}
          value={value}
          id={groupName}
          className="grid place-content-center rounded-full border-none bg-skin-page-forground-hover text-transparent shadow-inner outline
          outline-2 outline-offset-0 transition-all duration-75 focus:shadow-none focus:outline focus:outline-offset-2 
          focus:outline-skin-primary focus:ring-0"
          checked={currentValue === value}
          onChange={e => setCurrentValue(e.target.value)}
        />
        {children}
      </label>
    </div>
  );
};

export default RadioButton;

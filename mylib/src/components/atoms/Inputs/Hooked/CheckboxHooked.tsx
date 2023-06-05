import React from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  /** Checkbox label */
  children: string;
  /** Name of registed item (ReactHookForm) */
  name: string;
  /** Register the component to the form (ReactHookForm) */
  register: (name: string, any: any) => any;
  /** Is this field required? (ReactHookForm) */
  required: any;
  /** Value saved when selected */
  value: string | [];
  /** Error object containing all errors from registered inputs */
  error?: any;
  /** Used to group together multiple checkboxes */
  groupName: string;
};
const CheckboxHooked = ({
  children,
  name,
  register,
  required,
  value,
  error = null,
  groupName,
}: CheckboxProps) => {
  return (
    <div className="w-full py-1">
      <label
        htmlFor={groupName}
        className={`grid gap-1 items-center cursor-pointer ${styles.form_control} `}
        style={{ gridTemplateColumns: '1.5rem auto' }}
      >
        <input
          {...register(name, { required: required })}
          type={'radio'}
          name={name}
          value={value}
          id={groupName}
          className="bg-skin-page-forground-hover outline outline-offset-0 border-none shadow-inner rounded-full grid place-content-center
          focus:ring-0 focus:outline outline-2 focus:outline-skin-primary focus:outline-offset-2 focus:shadow-none text-transparent 
          transition-all duration-75"
        />
        {children}
      </label>
      {error && <span className="text-red-600">This field is required</span>}
    </div>
  );
};

export default CheckboxHooked;

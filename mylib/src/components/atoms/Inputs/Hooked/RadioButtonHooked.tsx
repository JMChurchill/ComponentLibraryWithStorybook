import React from 'react';
import styles from './Checkbox.module.css';

type RadioButtonProps = {
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
const RadioButtonHooked = ({
  children,
  name,
  register,
  required,
  value,
  error = null,
  groupName,
}: RadioButtonProps) => {
  return (
    <div className="w-full py-1">
      <label
        htmlFor={groupName}
        className={`grid cursor-pointer items-center gap-1 ${styles.form_control} `}
        style={{ gridTemplateColumns: '1.5rem auto' }}
      >
        <input
          {...register(name, { required: required })}
          type={'radio'}
          name={name}
          value={value}
          id={groupName}
          className="grid place-content-center rounded-full border-none bg-skin-page-forground-hover text-transparent shadow-inner outline
          outline-2 outline-offset-0 transition-all duration-75 focus:shadow-none focus:outline focus:outline-offset-2 
          focus:outline-skin-primary focus:ring-0"
        />
        {children}
      </label>
      {error && <span className="text-red-600">This field is required</span>}
    </div>
  );
};

export default RadioButtonHooked;

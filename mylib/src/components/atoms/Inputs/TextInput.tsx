import React from 'react';

type TextInputProps = {
  /** Displayed when there's no value in the input field */
  placeholder?: string;
  /** Name of registed item (ReactHookForm) */
  name: string;
  /** Does the input have multiple lines */
  multiline?: boolean;
  /** Hides the entered text  */
  password?: boolean;
  /** useState value */
  value: string;
  /** useState setter */
  setValue: (value: string) => void;
};

const TextInput = ({
  placeholder = '',
  name,
  multiline = false,
  password = false,
  value,
  setValue,
}: TextInputProps) => {
  if (!multiline)
    return (
      <div className="w-full">
        <input
          className={`flex w-full flex-col rounded-md border-none bg-skin-page-background px-2 py-1 text-skin-base shadow-inner
          outline-offset-0 transition-all duration-75 focus:border-none focus:outline focus:outline-2 focus:outline-offset-2
          focus:outline-skin-primary focus:ring-0
          `}
          placeholder={placeholder}
          name={name}
          id={name}
          type={password ? 'password' : 'text'}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    );
  return (
    <div className="w-full">
      <textarea
        className={`flex w-full flex-col rounded-md border-none bg-skin-page-background px-2 py-1 text-skin-base shadow-inner
        outline-offset-0 transition-all duration-75 focus:border-none focus:outline focus:outline-2 focus:outline-offset-2
          focus:outline-skin-primary focus:ring-0`}
        placeholder={placeholder}
        rows={5}
        cols={40}
        name={name}
      ></textarea>
    </div>
  );
};

export default TextInput;

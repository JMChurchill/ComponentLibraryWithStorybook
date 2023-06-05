import React, { ReactNode } from 'react';

type TextInputProps = {
  /** Displayed when there's no value in the input field */
  placeholder: string;
  /** Name of registed item (ReactHookForm) */
  name: string;
  /** Does the input have multiple lines */
  multiline?: boolean;
  /** Register the component to the form (ReactHookForm) */
  register: any;
  /** Is this field required? (ReactHookForm) */
  required?: any;
  /** Error object containing all errors from registered inputs */
  error: any;
  /** Hides the entered text  */
  password?: boolean;
  /** Extra error messages */
  additiontalErrorMessages?: ReactNode;
};

const TextInputHooked = ({
  placeholder = '',
  name,
  multiline = false,
  register,
  required = false,
  error = null,
  password = false,
  additiontalErrorMessages,
}: TextInputProps) => {
  const errorStyle = {
    borderLeft: '3px solid red',
  };
  if (!multiline)
    return (
      <div className="w-full">
        <input
          {...register(
            name,
            typeof required === 'boolean' ? { required: required } : required
          )}
          style={error ? errorStyle : null}
          className={`w-full flex flex-col bg-skin-page-background shadow-inner rounded-md px-2 py-1 text-skin-base border-none
          focus:outline focus:outline-2 outline-offset-0 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0 focus:border-none
          transition-all duration-75
          `}
          placeholder={placeholder}
          name={name}
          id={name}
          type={password ? 'password' : 'text'}
        />
        <div>
          {error && (
            <span className="text-red-600">This field is required</span>
          )}
          {additiontalErrorMessages}
        </div>
      </div>
    );
  return (
    <div className="w-full">
      <textarea
        style={error ? errorStyle : null}
        className={`flex flex-col w-full bg-skin-page-background shadow-inner rounded-md px-2 py-1 text-skin-base border-none
        focus:outline focus:outline-2 outline-offset-0 focus:outline-offset-2 focus:outline-skin-primary focus:ring-0 focus:border-none
          transition-all duration-75`}
        placeholder={placeholder}
        rows="5"
        cols="40"
        name={name}
        {...register(
          name,
          typeof required === 'boolean' ? { required: required } : required
        )}
      ></textarea>
      <div>
        {error && <span className="text-red-600">This field is required</span>}
        {additiontalErrorMessages}
      </div>
    </div>
  );
};

export default TextInputHooked;

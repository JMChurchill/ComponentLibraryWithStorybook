import React, { useEffect, useState } from 'react';
import InputErrorMessageContainer from '../ErrorMessage/InputErrorMessageContainer';
import InputErrorMessage from '../ErrorMessage/InputErrorMessage';

type AdditionalErrorMessageType = {
  isShowing: boolean;
  errorMessage: string;
};

type TextInputProps = {
  /** Displayed when there's no value in the input field */
  placeholder?: string;
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
  /** Extra error messages - last error message will be displayed*/
  additiontalErrorMessages?: AdditionalErrorMessageType[];
  // additiontalErrorMessages?: ReactNode;
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let tempErrorMessage: string | null = null;
    if (additiontalErrorMessages) {
      additiontalErrorMessages.map((eM) => {
        if (eM.isShowing === true) tempErrorMessage = eM.errorMessage;
      });
    }
    if (tempErrorMessage === null && error)
      tempErrorMessage = 'This field is required';

    setErrorMessage(tempErrorMessage);
  }, [error, additiontalErrorMessages]);

  if (!multiline)
    return (
      <div className="w-full">
        <input
          {...register(
            name,
            typeof required === 'boolean' ? { required: required } : required
          )}
          className={`flex w-full flex-col rounded-md border bg-skin-page-background px-2 py-1 text-skin-base shadow-inner
          outline-offset-0 transition-all duration-75 focus:border-transparent focus:outline focus:outline-2 focus:outline-offset-2
          focus:outline-skin-primary focus:ring-0 ${
            errorMessage
              ? 'border-2 border-red-500'
              : 'border-skin-forground-hover'
          }
          `}
          placeholder={placeholder}
          name={name}
          id={name}
          type={password ? 'password' : 'text'}
        />
        <InputErrorMessageContainer>
          {errorMessage && (
            <InputErrorMessage>{errorMessage}</InputErrorMessage>
          )}
        </InputErrorMessageContainer>
      </div>
    );
  return (
    <div className="w-full">
      <textarea
        className={`flex w-full flex-col rounded-md border border-skin-forground-hover bg-skin-page-background px-2 py-1 text-skin-base shadow-inner
        outline-offset-0 transition-all duration-75 focus:border-transparent focus:outline focus:outline-2 focus:outline-offset-2
          focus:outline-skin-primary focus:ring-0 ${
            errorMessage
              ? 'border-2 border-red-500'
              : 'border-skin-forground-hover'
          }`}
        placeholder={placeholder}
        rows="5"
        cols="40"
        name={name}
        {...register(
          name,
          typeof required === 'boolean' ? { required: required } : required
        )}
      ></textarea>
      <InputErrorMessageContainer>
        {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
      </InputErrorMessageContainer>
    </div>
  );
};

export default TextInputHooked;

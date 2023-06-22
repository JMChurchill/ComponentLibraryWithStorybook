import React, { ReactNode } from 'react';

type ErrorMessageProps = {
  children: ReactNode;
};

const InputErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className="text-red-600">{children}</p>;
};

export default InputErrorMessage;

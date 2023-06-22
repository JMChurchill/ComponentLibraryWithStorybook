import React, { ReactNode } from 'react';

type ErrorMessageContainerProps = {
  children: ReactNode;
};

const InputErrorMessageContainer = ({
  children,
}: ErrorMessageContainerProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default InputErrorMessageContainer;

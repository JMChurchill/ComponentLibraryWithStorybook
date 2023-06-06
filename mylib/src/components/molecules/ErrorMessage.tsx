import React from 'react';
import Button from '../atoms/Button';

type ErrorMessageProps = {
  /** Provide an error message */
  children: string | null;
  refreshFunc?: (() => any) | null;
  /** Should the component contents be centered? */
  center?: boolean;
};

const ErrorMessage = ({
  children,
  refreshFunc = null,
  center = false,
}: ErrorMessageProps) => {
  if (children === '' || children === null || children === undefined)
    return <></>;
  return (
    <div
      className={`py-4 ${
        center ? 'flex flex-col items-center justify-center gap-2' : ''
      }`}
    >
      <p className="font-bold text-red-600">{children}</p>
      {refreshFunc && <Button onClick={refreshFunc}>Refresh</Button>}
    </div>
  );
};

export default ErrorMessage;

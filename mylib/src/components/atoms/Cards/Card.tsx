import React, { ReactNode } from 'react';

const Card = ({
  children,
}: {
  /** Card contents */
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col bg-skin-page-forground rounded-md p-2 text-skin-base shadow-md">
      {children}
    </div>
  );
};

export default Card;

import React, { ReactNode } from 'react';

const Card = ({
  children,
}: {
  /** Card contents */
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col rounded-md bg-skin-page-forground p-4 text-skin-base shadow-md">
      {children}
    </div>
  );
};

export default Card;

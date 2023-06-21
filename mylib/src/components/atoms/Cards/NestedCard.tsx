import React, { ReactNode } from 'react';

const NestedCard = ({
  children,
  fillHeight = false,
  scrollable = true,
}: {
  /** Card contents */
  children: ReactNode;
  /** Make the card the full height of its parent container */
  fillHeight?: boolean;
  scrollable?: boolean;
}) => {
  return (
    <div
      className={`h-full ${
        scrollable ? 'overflow-auto' : ''
      } rounded-md bg-skin-page-background p-4 ${fillHeight && 'h-full'}`}
    >
      {children}
    </div>
  );
};

export default NestedCard;

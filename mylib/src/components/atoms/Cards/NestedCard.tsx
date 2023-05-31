import React, { ReactNode } from 'react';

const NestedCard = ({
  children,
  fillHeight = false,
}: {
  /** Card contents */
  children: ReactNode;
  /** Make the card the full height of its parent container */
  fillHeight?: boolean;
}) => {
  return (
    <div
      className={`bg-skin-page-background rounded-md p-2 h-full overflow-auto ${fillHeight &&
        'h-full'}`}
    >
      {children}
    </div>
  );
};

export default NestedCard;

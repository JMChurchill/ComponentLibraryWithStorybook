import React, { ReactNode } from 'react';

const TopNavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="min-h-screen overflow-hidden bg-skin-page-background"
      style={{ gridTemplateRows: '3rem calc(100% - 3rem)' }}
    >
      {children}
    </div>
  );
};

export default TopNavLayout;

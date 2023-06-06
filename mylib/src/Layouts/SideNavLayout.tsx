import React, { ReactNode } from 'react';

const SideNavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="grid h-screen max-h-screen grid-cols-2 overflow-hidden"
      style={{ gridTemplateColumns: 'auto 1fr' }}
    >
      {children}
    </div>
  );
};

export default SideNavLayout;

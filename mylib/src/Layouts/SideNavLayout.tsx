import React, { ReactNode } from "react";

const SideNavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="max-h-screen h-screen grid grid-cols-2 overflow-hidden"
      style={{ gridTemplateColumns: "auto 1fr" }}
    >
      {children}
    </div>
  );
};

export default SideNavLayout;

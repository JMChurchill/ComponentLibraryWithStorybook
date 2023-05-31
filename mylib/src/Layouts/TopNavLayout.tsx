import React, { ReactNode } from "react";

const TopNavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-skin-page-background overflow-hidden"
      style={{ gridTemplateRows: "3rem calc(100% - 3rem)" }}
    >
      {children}
    </div>
  );
};

export default TopNavLayout;

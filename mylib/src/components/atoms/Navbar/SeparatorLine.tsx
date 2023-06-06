import React from 'react';

/** Seperate content */
const SeparatorLine = ({
  children,
  showNav = true,
}: {
  children?: string;
  showNav?: boolean;
}) => {
  return (
    <li className="relative flex w-full items-center justify-center">
      <p
        className={`z-20 overflow-hidden bg-skin-page-forground px-2 
        ${showNav ? 'max-w-sm' : 'max-w-0 opacity-0'}
        transition-all duration-300`}
      >
        {children}
      </p>
      <div className="absolute z-0 h-[0.1rem] w-[90%] rounded-xl bg-skin-page-forground-hover"></div>
    </li>
  );
};

export default SeparatorLine;

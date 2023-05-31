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
    <li className="relative w-full flex justify-center items-center">
      <p
        className={`z-20 bg-skin-page-forground px-2 overflow-hidden 
        ${showNav ? 'max-w-sm' : 'max-w-0 opacity-0'}
        transition-all duration-300`}
      >
        {children}
      </p>
      <div className="absolute h-[0.1rem] w-[90%] bg-skin-page-forground-hover z-0 rounded-xl"></div>
    </li>
  );
};

export default SeparatorLine;

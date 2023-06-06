import React from 'react';
import { Link } from 'react-router-dom';

type SubLinkProps = {
  children: string;
  to: string;
  notifications?: number;
  isCurrent: boolean;
  showNav?: boolean;
};
/** Like the [Main Link](/docs/components-atoms-navbar-mainlink--docs) but without an icon */
const SubLink = ({
  children: name,
  to,
  notifications,
  isCurrent,
  showNav = true,
}: SubLinkProps) => {
  console.log(notifications);

  return (
    <li
      className={`relative flex cursor-pointer flex-row items-center gap-5 rounded-sm px-2 py-1 text-skin-base
        transition-all duration-500 
        hover:bg-skin-page-forground-hover hover:text-skin-primary
        ${isCurrent ? 'text-skin-primary' : ''}`}
    >
      <div className={`w-6 bg-transparent `}></div>
      <Link
        to={to}
        className={`rounded-full px-2 py-1 ${showNav ? '' : 'hidden'}`}
      >
        {name}
      </Link>
      <div
        className={`absolute bottom-0 right-0 h-2 w-2 rounded-full bg-skin-primary p-1 transition-all duration-500 ${
          notifications === undefined || notifications === 0 || showNav
            ? 'invisible opacity-0'
            : 'visible opacity-100'
        }`}
      ></div>

      <p
        className={`rounded-full bg-skin-primary px-2 ${
          showNav ? '' : 'hidden'
        }`}
      >
        {notifications}
      </p>
    </li>
  );
};

export default SubLink;

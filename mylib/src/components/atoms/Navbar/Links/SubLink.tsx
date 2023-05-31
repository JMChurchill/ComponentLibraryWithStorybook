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
      className={`relative flex flex-row px-2 py-1 items-center text-skin-base cursor-pointer gap-5 rounded-sm
        hover:text-skin-primary hover:bg-skin-page-forground-hover 
        transition-all duration-500
        ${isCurrent ? 'text-skin-primary' : ''}`}
    >
      <div className={`bg-transparent w-6 `}></div>
      <Link
        to={to}
        className={`px-2 py-1 rounded-full ${showNav ? '' : 'hidden'}`}
      >
        {name}
      </Link>
      <div
        className={`bg-skin-primary rounded-full w-2 h-2 absolute right-0 bottom-0 p-1 transition-all duration-500 ${
          notifications === undefined || notifications === 0 || showNav
            ? 'invisible opacity-0'
            : 'visible opacity-100'
        }`}
      ></div>

      <p
        className={`bg-skin-primary px-2 rounded-full ${
          showNav ? '' : 'hidden'
        }`}
      >
        {notifications}
      </p>
    </li>
  );
};

export default SubLink;

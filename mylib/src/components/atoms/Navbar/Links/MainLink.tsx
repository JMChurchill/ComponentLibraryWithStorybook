import React from 'react';
import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';

type MainLinkProps = {
  icon: IconType;
  children: string;
  to: string;
  notifications?: number;
  isCurrent?: boolean;
  showNav?: boolean;
};
/** A main link component for the [SideNav](/docs/components-molecules-navbar-sidenav--docs) */
const MainLink = ({
  children: name,
  icon: Icon,
  to,
  notifications,
  isCurrent,
  showNav = true,
}: MainLinkProps) => {
  return (
    <li className="list-none">
      <Link
        to={to}
        className={`relative flex cursor-pointer flex-row items-center gap-5 rounded-sm px-2 py-1 text-skin-base
        transition-all duration-500 
        hover:bg-skin-page-forground-hover hover:text-skin-primary
        ${isCurrent ? 'text-skin-primary' : ''}`}
      >
        <Icon size={24} />
        <p
          className={`hover:text-skin-primary 
                ${showNav ? '' : 'hidden'}
                ${isCurrent ? 'text-skin-primary' : ''}
                transition-all duration-500`}
        >
          {name}
        </p>
        <p
          className={`overflow-hidden rounded-full bg-skin-primary px-2 transition-all duration-200 ${
            notifications !== undefined && notifications !== 0 && !showNav
              ? 'absolute bottom-0 right-0 h-2 w-2 px-1 py-1 text-[0] text-transparent'
              : !showNav
              ? 'hidden'
              : ''
          }`}
        >
          {notifications}
        </p>
      </Link>
    </li>
  );
};

export default MainLink;

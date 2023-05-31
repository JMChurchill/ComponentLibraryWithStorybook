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
        className={`relative flex flex-row px-2 py-1 items-center text-skin-base cursor-pointer gap-5 rounded-sm
        hover:text-skin-primary hover:bg-skin-page-forground-hover 
        transition-all duration-500
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
          className={`bg-skin-primary px-2 rounded-full transition-all duration-200 overflow-hidden ${
            notifications !== undefined && notifications !== 0 && !showNav
              ? 'text-[0] text-transparent w-2 h-2 right-0 bottom-0 px-1 py-1 absolute'
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

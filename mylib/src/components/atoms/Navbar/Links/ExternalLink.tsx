import React from 'react';
import { IconType } from 'react-icons/lib';

type ExternalLinkProps = {
  icon: IconType;
  children: string;
  to: string | undefined;
  notifications?: number;
  showNav?: boolean;
  inNewTab?: boolean;
};
const ExternalLink = ({
  children: name,
  icon: Icon,
  to,
  notifications,
  showNav = true,
  inNewTab = false,
}: ExternalLinkProps) => {
  return (
    <li className="list-none">
      <a
        href={to === undefined ? '#' : to}
        target={inNewTab ? '_blank' : '_self'}
        className={`relative flex flex-row px-2 py-1 items-center text-skin-base cursor-pointer gap-5 rounded-sm
        hover:text-skin-primary hover:bg-skin-page-forground-hover 
        transition-all duration-500
        `}
      >
        <Icon size={24} />
        <p
          className={`hover:text-skin-primary 
                ${showNav ? '' : 'hidden'}
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
      </a>
    </li>
  );
};

export default ExternalLink;

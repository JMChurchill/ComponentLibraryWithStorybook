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
        className={`relative flex cursor-pointer flex-row items-center gap-5 rounded-sm px-2 py-1 text-skin-base
        transition-all duration-500 
        hover:bg-skin-page-forground-hover hover:text-skin-primary
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
      </a>
    </li>
  );
};

export default ExternalLink;

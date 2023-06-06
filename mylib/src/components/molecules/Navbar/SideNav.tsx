import React, { useState, useEffect, Children, ReactElement } from 'react';
import { MdMenu } from 'react-icons/md';

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../../Hooks/useStorage';
import NavSearchbar from '../../atoms/Navbar/NavSearchbar';

type SideNavProps = {
  /** Components being wrapped by this component. */
  children: ReactElement[] | ReactElement;
  /** Site title to be desiplayed at the top of the navbar. */
  title: string;
  /** Format: **"/endpointname"** */
  searchEndpoint?: string | null;
};
/** Simple drop in sidenav, use as a wrapper around navlink components.
 * **Important:** Side nav must be wrapped in a parent div to inherit its width, _recommended parent component: [SideNavLayout](/docs/layouts-sidenavlayout--docs)_
 */
const SideNav = ({ children, title, searchEndpoint = null }: SideNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNav, setShowNav] = useLocalStorage<boolean>('showNav', true);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentLink, setCurrentLink] = useState<number | null>();

  useEffect(() => {
    Children.map(children, (child, i) => {
      if (React.isValidElement(child as ReactElement<any>) && child.props.to) {
        if (
          location.pathname.toLowerCase().includes(child.props.to.toLowerCase())
        ) {
          setCurrentLink(i);
        }
      }
    });
  }, [location]);

  return (
    <header className="flex flex-col gap-3 bg-skin-page-forground px-4 py-10">
      <div>
        <div
          className={`flex flex-row-reverse ${!showNav && 'justify-center'}`}
        >
          <MdMenu
            className="box-content cursor-pointer rounded-sm p-1 text-skin-base
                  transition-all duration-500
                  hover:bg-skin-page-forground-hover hover:text-skin-primary"
            size={24}
            onClick={() => setShowNav(!showNav)}
          />
        </div>

        <h1
          className={`flex items-center justify-center overflow-hidden whitespace-nowrap`}
        >
          {title.split(/\s/).map(word => (
            <>
              {word.slice(0, 1)}
              <span
                className={`overflow-hidden transition-all duration-200 ${
                  showNav ? 'max-w-xs' : 'max-w-0 opacity-0'
                }`}
              >
                {word.slice(1)}&nbsp;
              </span>
            </>
          ))}
        </h1>
      </div>

      <nav>
        <ul className="flex flex-col gap-2">
          {searchEndpoint && (
            <NavSearchbar
              showNav={showNav}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              navigate={navigate}
              searchEndpoint={searchEndpoint}
            />
          )}
          {Children.map(children, (child, i) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as ReactElement<any>, {
                showNav,
                isCurrent: currentLink === i,
              });
            }
            return child;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default SideNav;

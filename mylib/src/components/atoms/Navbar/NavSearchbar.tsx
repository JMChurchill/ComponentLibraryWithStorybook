import React, { ChangeEvent } from 'react';
import { MdSearch } from 'react-icons/md';
import { NavigateFunction } from 'react-router-dom';

export declare type NavSearchbarType = (props: NavSearchbar) => JSX.Element;

type NavSearchbar = {
  showNav?: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  navigate: NavigateFunction;
  searchEndpoint: string;
};
const NavSearchbar = ({
  showNav = true,
  searchTerm,
  setSearchTerm,
  navigate,
  searchEndpoint,
}: NavSearchbar) => {
  return (
    <>
      <form
        className={`relative grid overflow-hidden transition-all duration-200 ${
          showNav ? 'w-48' : 'overflow-visible'
        }`}
        style={{ gridTemplateColumns: '1fr auto' }}
      >
        <div
          className={`grid overflow-hidden transition-all duration-200 ${
            showNav ? 'w-48' : 'w-0'
          }`}
          style={{ gridTemplateColumns: '1fr auto' }}
        >
          <input
            className="w-full rounded-full border-2 border-transparent bg-skin-page-background p-1 px-2 text-skin-base outline-skin-primary"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <button
            className={` text-button-inverse absolute right-0 top-0 m-0 
            flex h-full items-center justify-center
            rounded-full p-1 font-bold
            transition-all
            duration-200 hover:text-button-inverted ${
              showNav ? 'flex' : 'hidden'
            }`}
            // className="bg-skin-primary text-button-base border-skin-primary
            // p-1 px-2 m-0 border-2 font-bold
            // hover:bg-skin-page-forground hover:text-button-inverted
            // transition-all duration-200"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              navigate(`${searchEndpoint}/${searchTerm}`, {
                state: {},
                relative: 'path',
              });
            }}
          >
            <MdSearch size={20} />
          </button>
        </div>
        <FloatingSearch
          navigate={navigate}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchEndpoint={searchEndpoint}
        />
      </form>
    </>
  );
};

const FloatingSearch = ({
  searchTerm,
  setSearchTerm,
  navigate,
  searchEndpoint,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  navigate: NavigateFunction;
  searchEndpoint: string;
}) => {
  return (
    <div className="group relative z-50 flex w-full items-center justify-center text-skin-base">
      <MdSearch
        size={20}
        className="box-content cursor-pointer px-2 py-1
      transition-all duration-500 hover:bg-skin-page-forground-hover
      hover:text-skin-primary"
      />
      <div
        className="invisible absolute left-full px-8 opacity-0 transition-all duration-500  hover:visible  hover:opacity-100
                group-hover:visible group-hover:opacity-100"
      >
        <div
          className="grid w-48 rounded-full bg-skin-page-forground-hover p-2 py-1"
          style={{ gridTemplateColumns: '1fr auto' }}
        >
          <input
            className="w-full bg-transparent text-skin-base"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <button
            className="absolute right-0 top-0 m-0 h-full -translate-x-full 
            bg-transparent p-1 font-bold text-button-inverted
            transition-all
            duration-200 hover:text-button-inverted"
            onClick={e => {
              e.preventDefault();
              navigate(`/${searchEndpoint}/${searchTerm}`, {
                state: {},
                relative: 'path',
              });
            }}
          >
            <MdSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavSearchbar;

import React, { ChangeEvent } from 'react';
import { HiSearch } from 'react-icons/hi';
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
        className={` grid transition-all duration-200 overflow-hidden ${
          showNav ? 'w-48' : 'overflow-visible'
        }`}
        style={{ gridTemplateColumns: '1fr auto' }}
      >
        <div
          className={` grid transition-all duration-200 overflow-hidden ${
            showNav ? 'w-48' : 'w-0'
          }`}
          style={{ gridTemplateColumns: '1fr auto' }}
        >
          <input
            className="w-full border-2 bg-skin-page-background border-skin-background text-skin-base"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <button
            className="bg-skin-primary text-button-base border-skin-primary 
            p-1 px-2 m-0 border-2 font-bold
            hover:bg-skin-page-forground hover:text-button-inverted
            transition-all duration-200"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              navigate(`${searchEndpoint}/${searchTerm}`, {
                state: {},
                relative: 'path',
              });
            }}
          >
            <HiSearch size={20} />
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
    <div className="relative flex items-center justify-center w-full text-skin-base group z-50">
      <HiSearch
        size={24}
        className="px-2 py-1 box-content 
            hover:text-skin-primary hover:bg-skin-page-forground-hover cursor-pointer
            transition-all duration-500"
      />
      <div
        className="absolute invisible opacity-0 left-full px-8 hover:visible group-hover:visible  group-hover:opacity-100  hover:opacity-100
                transition-all duration-500"
      >
        <div
          className="grid w-48 p-2 py-1 rounded-sm bg-skin-page-forground-hover"
          style={{ gridTemplateColumns: '1fr auto' }}
        >
          <input
            className="w-full border-2 bg-skin-page-background border-skin-background text-skin-base"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <button
            className="bg-skin-primary text-button-base border-skin-primary 
            p-1 px-2 m-0 border-2 font-bold
            hover:bg-skin-page-forground hover:text-button-inverted
            transition-all duration-200"
            onClick={e => {
              e.preventDefault();
              navigate(`/${searchEndpoint}/${searchTerm}`, {
                state: {},
                relative: 'path',
              });
            }}
          >
            <HiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavSearchbar;

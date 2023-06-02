import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import 'rc-slider/assets/index.css';
import FilterItem from './FilterItem';
import FilterSettings from './FilterSettings';
import { MdClose, MdFilterList, MdSearch } from 'react-icons/md';
// import { useSessionStorage } from '../../../../Hooks/useStorage';

export type FilterType = {
  id: number;
  name: string;
  type: string;
  value: string | number[] | Date;
  label?: string;
  key: string;
  action: (data: any[], key: string) => void;
};

type ItemType = {
  id: number | string;
  [key: string]: any;
};

type FilterbarProps = {
  /** Initial dataset */
  data: ItemType[];
  /** Initial dataset setter */
  setData: (a: any) => void;
  /** List of object properties not to filter */
  noFilter: string[];
  /** List of object properties and what to rename them to */
  aliases?: { [name: string]: string } | null;
  /** Current page to save the filter settings to in the session storage */
  pageName: string;

  /** Add a search input */
  searchable?: boolean;

  /** Update this to reset the filterbar - I've noticed in some scenarios you might want to reset the full dataset of the component after the rerender.*/
  resetFilterbar?: boolean;
};

/** A drop in filterbar that can be used to filter any dataset with minimal setup. */
const Filterbar = ({
  data,
  setData,
  noFilter,
  aliases = null,
  pageName,
  searchable = false,
  resetFilterbar = false,
}: FilterbarProps) => {
  useEffect(() => {
    console.log(pageName);
  }, []);
  const didMount = useRef(false);

  const [fullData, setFullData] = useState<any[]>([]);

  // const [filters, setFilters] = useSessionStorage<FilterType[]>(pageName, []);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (didMount.current) {
      setFullData(data);
    } else didMount.current = true;
  }, [resetFilterbar]);

  useEffect(() => {
    if (fullData.length === 0) {
      setFullData(data);
    }
  }, [data]);

  useEffect(() => {
    function destinct(value: any, index: any, self: any) {
      return self.indexOf(value) === index;
    }
    const groupedMap = filters.reduce(
      (entryMap, e) =>
        entryMap.set(e.type, [...(entryMap.get(e.type) || []), e]),
      new Map()
    );
    if (fullData !== null && fullData !== undefined && fullData.length !== 0) {
      if (groupedMap === undefined) {
        setData(fullData);
      } else {
        let filteredData = fullData;
        groupedMap.forEach(value => {
          let a = value.map(
            (filter: {
              key: string;
              action: (data: any[], key: string) => any;
            }) => {
              return {
                key: filter.key,
                array: filter.action(fullData, filter.key),
              };
            }
          );

          const result = a.reduce(function(r: any, a: any) {
            r[a.key] = r[a.key] || [];
            r[a.key].push(...a.array);
            return r;
          }, Object.create(null));

          for (const [_key, value] of Object.entries(result)) {
            let temp = value as any[];
            filteredData = temp.filter(i => filteredData.includes(i));
          }
        });
        setData(
          filteredData
            .filter(destinct)
            .filter(item =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
      }
    }

    // setData(filteredData);
  }, [filters, fullData, searchTerm]);

  function onDeleteFilter(deletingFilter: FilterType) {
    setFilters(prevFilters => {
      return prevFilters
        ? prevFilters.filter(filter => filter !== deletingFilter)
        : prevFilters;
    });
  }

  return (
    <div
      className=" grid p-1 items-start relative"
      style={{ gridTemplateColumns: '1fr auto' }}
    >
      <div className="flex flex-row flex-wrap gap-1 text-skin-base">
        <>
          {filters.map((filter, i) => (
            <FilterItem
              key={i}
              id={filter.id}
              name={filter.name}
              onDelete={() => onDeleteFilter(filter)}
            />
          ))}
        </>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-skin-page-forground-hover rounded-full px-2 hover:bg-skin-page-forground-hover-hover flex flex-row items-center justify-center gap-1 text-skin-base"
        >
          <MdFilterList size={25} />
          Filters
        </button>
        {searchable && (
          <Searchbar
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setData={setData}
            fullData={fullData}
          />
        )}
      </div>

      <FilterSettings
        fullData={fullData}
        isAdding={isAdding}
        setIsAdding={setIsAdding}
        filters={filters}
        setFilters={setFilters}
        noFilter={noFilter}
        aliases={aliases}
      />
    </div>
  );
};

export default Filterbar;

type SearchbarProps = {
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setData: (data: ItemType[]) => void;
  fullData: ItemType[];
};

const Searchbar = ({
  isSearching,
  setIsSearching,
  searchTerm,
  setSearchTerm,
  setData,
  fullData,
}: SearchbarProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsSearching(!isSearching)}
        className="bg-skin-page-forground-hover rounded-full px-1 hover:bg-skin-page-forground-hover-hover flex flex-row items-center justify-center gap-1 text-skin-base max-w-[10rem]"
      >
        <MdSearch size={24} className="min-w-[18px]" />
        {searchTerm && (
          <>
            <p className="line-clamp-2">{searchTerm}</p>
            <MdClose
              size={18}
              onClick={() => {
                setSearchTerm('');
                setData(fullData);
              }}
              className="hover:text-red-600 min-w-[18px]"
            />
          </>
        )}
      </button>
      {isSearching && (
        <form
          className={`absolute top-full right-0 grid my-2`}
          style={{ gridTemplateColumns: '1fr auto' }}
        >
          <div
            className={`grid transition-all duration-200 `}
            style={{ gridTemplateColumns: '1fr auto' }}
          >
            <input
              className="w-48 border-2 border-transparent p-1 text-skin-base rounded-full bg-skin-page-background"
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              autoFocus
            />
            <button
              className=" absolute right-0 top-0 h-full text-button-inverse 
            p-1 m-0 font-bold rounded-full
            hover:text-button-inverted
            transition-all duration-200"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                setSearchTerm(searchTerm);
              }}
            >
              <MdSearch size={20} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

const FilterItem = ({
  name,
  onDelete,
}: {
  id: number;
  name: string;
  onDelete: () => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 rounded-full bg-skin-page-forground-hover px-2">
      <p>{name}</p>
      <MdOutlineClose
        className="cursor-pointer hover:text-red-600"
        onClick={onDelete}
        onKeyDown={async e => {
          if (e.key === 'Enter') {
            onDelete();
          }
        }}
        tabIndex={0}
      />
    </div>
  );
};

export default FilterItem;

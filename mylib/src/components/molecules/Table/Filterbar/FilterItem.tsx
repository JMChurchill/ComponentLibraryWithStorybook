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
    <div className="bg-skin-page-forground-hover rounded-full px-2 gap-2 flex flex-row justify-center items-center">
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

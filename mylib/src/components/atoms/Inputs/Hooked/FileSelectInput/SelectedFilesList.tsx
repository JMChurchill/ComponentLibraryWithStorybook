import React from 'react';
import { MdClose } from 'react-icons/md';

type SelectedFilesListProps = {
  uploadedFiles: File[];
  setUploadedFiles: (files: File[]) => void;
};

const SelectedFilesList = ({
  uploadedFiles,
  setUploadedFiles,
}: SelectedFilesListProps) => {
  if (uploadedFiles.length === 0) {
    return <p className="text-skin-secondary">No Files selected</p>;
  }
  return (
    <div className="flex flex-col gap-2">
      {uploadedFiles.map(file => {
        console.log(file);

        let url = '';
        if (file.type.includes('image')) url = URL.createObjectURL(file);
        else url = '';

        return (
          <div
            key={`${file.size}_${file.name}`}
            className="flex flex-row items-center gap-1"
          >
            <div
              className="h-10 w-10"
              style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <p>{file.name}</p>
            <div className="rounded-full transition-all duration-200 hover:bg-slate-200">
              <MdClose
                size={24}
                className="cursor-pointer text-red-600"
                onClick={() =>
                  setUploadedFiles(uploadedFiles.filter(f => f !== file))
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedFilesList;

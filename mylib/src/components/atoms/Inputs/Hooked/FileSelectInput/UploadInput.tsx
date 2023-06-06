import React, { useState } from 'react';
import { MdUpload } from 'react-icons/md';
import SelectedFilesList from './SelectedFilesList';

type FileSelectProps = {
  register: any;
  /** Source list of files */
  multipleFiles: File[];
  /** File list setter function */
  setMultipleFiles: (files: File[]) => void;
};

const UploadInput = ({
  register,
  multipleFiles,
  setMultipleFiles,
}: FileSelectProps) => {
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = function(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      imageUploaded(e);
    }
  };

  const imageUploaded = (e: any) => {
    if (e.target.files) {
      const imageArray = e.target.files;
      setMultipleFiles([...multipleFiles, ...imageArray]);
    } else if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const imageArray = e.dataTransfer.files;
      setMultipleFiles([...multipleFiles, ...imageArray]);
    }
  };

  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <div
          className={`flex min-h-[5rem] w-full items-center justify-center rounded-md border-2 border-dashed p-4 ${
            dragActive ? 'border-skin-primary' : 'border-skin-text'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <p className="text-skin-secondary">Drag & Drop files to upload</p>
        </div>
        <label
          htmlFor="files"
          className="flex cursor-pointer flex-row gap-2 rounded-md border-2 border-skin-primary 
              bg-skin-primary p-2 font-bold
              text-button-base transition-all
              duration-300 hover:bg-transparent hover:text-skin-primary"
          tabIndex={0}
        >
          <MdUpload size={24} />
          Add Files
        </label>
        <input
          {...register('file', { required: false })}
          type="file"
          accept="/*"
          multiple
          id="files"
          name="files"
          data-testid="files"
          onChange={imageUploaded}
          className="hidden"
        />
      </div>
      <SelectedFilesList
        uploadedFiles={multipleFiles}
        setUploadedFiles={setMultipleFiles}
      />
    </>
  );
};

export default UploadInput;

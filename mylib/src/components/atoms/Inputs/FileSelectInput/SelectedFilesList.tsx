import React from "react";
import { MdClose } from "react-icons/md";

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
      {uploadedFiles.map((file) => {
        console.log(file);

        let url = "";
        if (file.type.includes("image")) url = URL.createObjectURL(file);
        else url = "";

        return (
          <div
            key={`${file.size}_${file.name}`}
            className="flex flex-row gap-1 items-center"
          >
            <div
              className="w-10 h-10"
              style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p>{file.name}</p>
            <div className="hover:bg-slate-200 rounded-full transition-all duration-200">
              <MdClose
                size={24}
                className="text-red-600 cursor-pointer"
                onClick={() =>
                  setUploadedFiles(uploadedFiles.filter((f) => f !== file))
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

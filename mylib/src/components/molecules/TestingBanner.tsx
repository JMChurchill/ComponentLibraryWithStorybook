import React, { useState } from 'react';
import { MdClose, MdScience } from 'react-icons/md';

/** A banner to signify the user is using a test system. */
const TestingBanner = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div
      className={`fixed top-[20%] right-0 flex flex-row gap-2 items-center bg-skin-primary-transparent rounded-md w-fit py-2 px-2 pr-5 m-2
      z-[99999999999]
            -translate-y-[50%] transition-all ${
              isActive
                ? 'translate-x-0'
                : 'translate-x-[calc(100%-2.25rem-0.5rem)] hover:translate-x-[calc(100%-2.25rem-1rem)] cursor-pointer'
            }`}
      onClick={() => !isActive && setIsActive(true)}
    >
      <MdScience className="text-4xl text-white" />
      <p className="text-white text-2xl">Test System</p>
      <MdClose
        className="absolute top-0 right-0 m-1 text-md text-white cursor-pointer hover:bg-white hover:text-skin-primary rounded-full"
        onClick={() => setIsActive(false)}
      />
    </div>
  );
};

export default TestingBanner;

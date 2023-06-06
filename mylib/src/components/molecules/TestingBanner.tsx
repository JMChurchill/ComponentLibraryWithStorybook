import React, { useState } from 'react';
import { MdClose, MdScience } from 'react-icons/md';

/** A banner to signify the user is using a test system. */
const TestingBanner = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div
      className={`fixed right-0 top-[20%] z-[99999999999] m-2 flex w-fit -translate-y-[50%] flex-row items-center gap-2 rounded-md bg-skin-primary-transparent px-2
      py-2
            pr-5 transition-all ${
              isActive
                ? 'translate-x-0'
                : 'translate-x-[calc(100%-2.25rem-0.5rem)] cursor-pointer hover:translate-x-[calc(100%-2.25rem-1rem)]'
            }`}
      onClick={() => !isActive && setIsActive(true)}
    >
      <MdScience className="text-4xl text-white" />
      <p className="text-2xl text-white">Test System</p>
      <MdClose
        className="text-md absolute right-0 top-0 m-1 cursor-pointer rounded-full text-white hover:bg-white hover:text-skin-primary"
        onClick={() => setIsActive(false)}
      />
    </div>
  );
};

export default TestingBanner;

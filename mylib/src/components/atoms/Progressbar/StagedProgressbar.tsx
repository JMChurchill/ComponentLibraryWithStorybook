import React from 'react';

type StagedProgressbarProps = {
  /** List of stage names */
  stages: string[];
  /** Current stage */
  progress: number;
};

const StagedProgressbar = ({ stages, progress }: StagedProgressbarProps) => {
  const sectionWidth = 100 / stages.length;

  return (
    <div className="p-1">
      <div className="relative w-full h-2  my-5 mx-0 rounded-xl shadow-sm">
        <div className="absolute top-0 left-0 flex flex-row w-full gap-3 ">
          {stages.map((stage, i) => (
            <Stage
              key={i}
              width={sectionWidth}
              name={stage}
              active={i < progress}
              numStages={stages.length}
              last={i === 0}
              first={i === stages.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Stage = ({
  width,
  name,
  active,
  numStages,
  last = false,
  first = false,
}: {
  width: number;
  name: string;
  active: boolean;
  numStages: number;
  last: boolean;
  first: boolean;
}) => {
  return (
    <div
      className={`relative h-2 bg-skin-primary ${
        last ? 'rounded-l-xl' : 'rounded-none'
      } ${first ? 'rounded-r-xl' : 'rounded-none'}`}
      style={
        active
          ? {
              width: `calc(${width}% - ${0.75 / (numStages - 1)}rem)`,
            }
          : {
              width: `calc(${width}% - ${0.75 / (numStages - 1)}rem)`,
              backgroundColor: 'gray',
            }
      }
    >
      <h2
        className="absolute bottom-full left-1/2 translate-x-[-50%] font-bold text-center"
        style={{
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name.substring(0, 1).toUpperCase() + name.substring(1)}
      </h2>
    </div>
  );
};

export default StagedProgressbar;

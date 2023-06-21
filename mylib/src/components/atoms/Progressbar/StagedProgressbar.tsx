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
      <div className="relative mx-0 my-5  h-2 w-full rounded-xl shadow-sm">
        <div className="absolute left-0 top-0 flex w-full flex-row gap-3 ">
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
              width: `calc(${width}% - ${
                numStages > 1 ? 0.75 / (numStages - 1) : 0
              }rem)`,
            }
          : {
              width: `calc(${width}% - ${
                numStages > 1 ? 0.75 / (numStages - 1) : 0
              }rem)`,
              backgroundColor: 'gray',
            }
      }
    >
      <h2
        className="absolute bottom-full left-1/2 translate-x-[-50%] text-center font-bold"
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

import React, { useMemo } from "react";

interface LeafBranchProps {
  playsWellWithOthers: string;
  easilyIntegratesWithThe: string;
  toolsYouAlreadyUse: string;
  clickupIntegrationssvg: string;
  propHeight?: string;
}

const LeafBranch: React.FC<LeafBranchProps> = ({
  playsWellWithOthers,
  easilyIntegratesWithThe,
  toolsYouAlreadyUse,
  clickupIntegrationssvg,
  propHeight,
}) => {
  const leafBranchStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="h-[292.1px] w-[280.8px] flex flex-col items-start justify-start gap-[8.5px] text-left text-4xl text-clickupcom-nero font-clickupcom-inter-black-14"
      style={leafBranchStyle}
    >
      <h3 className="m-0 relative text-inherit leading-[30px] font-extrabold font-inherit inline-block max-w-[280.8299865722656px] z-[1] mq450:text-lg mq450:leading-[24px]">
        {playsWellWithOthers}
      </h3>
      <div className="w-full flex flex-row items-start justify-start max-w-[240px] z-[1] text-base">
        <div className="relative leading-[25px] font-medium inline-block max-w-[240px]">
          <p className="m-0">{easilyIntegratesWithThe}</p>
          <p className="m-0">{toolsYouAlreadyUse}</p>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start z-[1]">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start max-w-[280.8299865722656px]">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={clickupIntegrationssvg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeafBranch;

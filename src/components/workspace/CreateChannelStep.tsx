import { CreateChannelStepProps } from "@/types/types";
import React from "react";

const CreateChannelStep: React.FC<CreateChannelStepProps> = ({
  channelName,
  setChannelName,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
      <h1 className="m-0 w-full relative font-bold flex items-center max-w-[calc(100% - 3rem)] text-4xl">
        What’s your team is working on right now ?
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
        <b className="w-full relative inline-block max-w-[calc(100% - 3rem)] text-lg md:text-xl text-grey-600">
          This could be anything: a project, campaign, event or deal you&apos;re
          trying to close.
        </b>
        <div className="self-stretch flex flex-row items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-4 md:gap-8">
          <div className="flex flex-row items-center relative w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] box max-w-[calc(100% - 3rem)]">
            <input
              className="outline-none bg-transparent h-12 w-full box-border opacity-50 border-2 border-solid border-darkgray relative font-lato rounded pl-3"
              type="text"
              placeholder="e.g. Q4 budget, autumn campaign"
              value={channelName}
              onChange={(e) => {
                setChannelName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelStep;

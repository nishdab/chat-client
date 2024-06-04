import { WorkspaceNameStepProps } from "@/types/types";
import React, { useState, ChangeEvent } from "react";

const WorkspaceNameStep: React.FC<WorkspaceNameStepProps> = ({
  spaceName,
  setSpaceName,
}) => {
  const [remainingCharacters, setRemainingCharacters] = useState<number>(50);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    const remainingChars = 50 - inputText.length;

    if (remainingChars >= 0) {
      setSpaceName(inputText);
      setRemainingCharacters(remainingChars);
    } else {
      event.target.value = spaceName;
    }
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
      <h1 className="m-0 w-full relative font-bold flex items-center max-w-[calc(100% - 3rem)] text-4xl">
        What’s the name of your company or team?
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
        <b className="w-full relative inline-block max-w-[calc(100% - 3rem)] text-lg md:text-xl text-grey-600">
          This will be the name of your chat workspace - choose something that
          your team will recognize
        </b>
        <div className="self-stretch flex flex-row items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-4 md:gap-8">
          <div className="flex flex-row items-center relative w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] box max-w-[calc(100% - 3rem)]">
            <input
              className="outline-none bg-transparent h-12 w-full box-border opacity-50 border-2 border-solid border-darkgray relative font-lato rounded pl-3"
              type="text"
              placeholder="e.g. A1 or A1 Marketing"
              onChange={handleInputChange}
            />

            <div className="text-mini absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">
              <span>{remainingCharacters}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceNameStep;

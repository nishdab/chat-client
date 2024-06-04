import { NoDataFoundProps } from "@/types/types";
import React from "react";

const NoDataFound: React.FC<NoDataFoundProps> = ({ type, message }) => {
  return (
    <div className="flex flex-col h-full bg-slack-brand-ffffff overflow-y-auto">
      <div className="font-lato mt-[400px] text-2xl text-center">
        {message ? message : `No such ${type} found!`}
      </div>
    </div>
  );
};

export default NoDataFound;

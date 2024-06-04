import { DirectMessageListProps } from "@/types/types";
import Image from "next/image";
import React, { useMemo } from "react";

const DirectMessageList: React.FC<DirectMessageListProps> = ({
  imgSrc,
  isOnline,
  name,
  you = true,
  showStatusIcon = true,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`w-[228px] cursor-pointer rounded-md h-7 flex flex-row items-center justify-start py-0 pr-4 pl-3 box-border text-left text-mini text-slack-ui-ffffff-70 font-lato ${
        isActive && "bg-[#1164a3]"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-start gap-[0px_8px]">
        <div className="flex flex-row items-start justify-start relative">
          <div className="w-5 relative h-5 z-[0]">
            <div className="absolute top-[0px] left-[0px] rounded-[3.08px] overflow-hidden flex flex-row items-start justify-start">
              <Image
                height={20}
                width={20}
                className="w-5 relative h-5 object-cover"
                alt=""
                src={imgSrc}
              />
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-[3.08px] bg-slack-ui-ffffff-13 w-5 h-5 overflow-hidden hidden" />
          </div>
          {showStatusIcon && (
            <Image
              height={7}
              width={7}
              className="w-[7px] absolute !m-[0] top-[14px] left-[15.7px] h-[7px] z-[1]"
              alt=""
              src={isOnline ? "/status.svg" : "/offline-status.svg"}
            />
          )}
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_8px]">
          <div
            className={`relative leading-[15px] ${
              isActive ? "text-white" : "text-slack-ui-ffffff-70"
            }`}
          >
            {name}
          </div>
          {you && (
            <div
              className={`relative leading-[15px] ${
                isActive ? "text-white" : "text-slack-ui-ffffff-70"
              } opacity-[0.7]`}
            >
              you
            </div>
          )}
        </div>
      </div>
      <div className="rounded hidden flex-row items-start justify-start p-1 opacity-[0.64]">
        <Image
          height={20}
          width={20}
          className="w-5 relative h-5 overflow-hidden shrink-0"
          alt=""
          src="/close.svg"
        />
      </div>
    </div>
  );
};

export default DirectMessageList;

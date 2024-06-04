import React from "react";
import Image from "next/image";
import { ChatUserContainerProps } from "@/types/types";

const ChatUserContainer: React.FC<ChatUserContainerProps> = ({
  name,
  imgSrc,
}) => {
  return (
    <div className="rounded-md flex flex-row items-center justify-start py-[3px] pr-2 pl-[3px] gap-[0px_8px] z-[1] text-left text-lg text-slack-brand-1d1c1d font-lato">
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
        {/* {statusCircle && ( */}
        <Image
          height={7}
          width={7}
          className="w-[7px] absolute !m-[0] top-[14px] left-[15.7px] h-[7px] z-[1]"
          alt=""
          src="/status.svg"
        />
        {/* )} */}
      </div>
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-center">
          <div className="relative leading-[133%] font-black">{name}</div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image
            height={18}
            width={18}
            className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatUserContainer;

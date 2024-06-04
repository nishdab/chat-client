import React from "react";
import Image from "next/image";
import { ChannelComponentProps } from "@/types/types";

const ChannelHeader: React.FC<ChannelComponentProps> = ({ channel }) => {
  return (
    <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start text-base">
      <div className="self-stretch bg-slack-brand-ffffff flex flex-row items-center justify-between py-[9px] px-3.5 border-b-[1px] border-solid border-gray-600">
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="flex flex-row items-center justify-start gap-[0px_4px]">
            <div className="relative font-extrabold">
              <Image
                height={20}
                width={20}
                className="relative w-5 h-5 object-cover"
                alt=""
                src={
                  channel?.isPrivate ? "/lock-channel.svg" : "/hashtag-thin.svg"
                }
              />
            </div>
          </div>
          <div className="relative text-[18px] font-bold">{channel?.name}</div>
          <div className="relative text-2xs font-medium text-darkslategray opacity-[0.7]">
            {channel?.name}
          </div>
        </div>
        <div className="rounded-10xs flex flex-row items-center justify-start py-[3px] pr-[9px] pl-[3px] gap-[0px_9px] text-2xs text-darkslategray border-[1px] border-solid border-gray-600">
          <div className="flex flex-row items-start justify-start">
            <Image
              height={20}
              width={20}
              className="w-5 relative rounded-12xs h-5 object-cover"
              alt=""
              src="/no-photo-a.svg"
            />
            <Image
              height={20}
              width={20}
              className="w-5 relative rounded-12xs h-5 object-cover ml-[-6px]"
              alt=""
              src="/no-photo-b.svg"
            />
            <Image
              height={20}
              width={20}
              className="w-5 relative rounded-12xs h-5 object-cover ml-[-6px]"
              alt=""
              src="/no-photo-c.svg"
            />
          </div>
          <b className="relative opacity-[0.7]">4</b>
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;

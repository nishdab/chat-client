import React, { useMemo } from "react";
import Image from "next/image";
import { ChannelsListProps } from "@/types/types";

const ChannelsList: React.FC<ChannelsListProps> = ({
  isPrivate,
  name,
  channelsStyle,
  isActive,
  onClick,
}) => {
  const channelStyle = useMemo(() => {
    return {
      alignSelf: channelsStyle,
    };
  }, [channelsStyle]);

  return (
    <div
      className={`rounded-md h-7 cursor-pointer flex flex-row items-center justify-start py-0 pr-2.5 pl-3 box-border gap-[0px_8px] text-left text-mini text-slack-ui-ffffff-70 font-lato ${
        isActive ? "bg-[#1164a3]" : ""
      }`}
      style={channelStyle}
      onClick={onClick}
    >
      <Image
        className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        alt=""
        src={isPrivate ? "/lock.svg" : "/hashtag.svg"}
        width={18}
        height={18}
      />
      <div className="relative leading-[15px]">{name}</div>
    </div>
  );
};

export default ChannelsList;

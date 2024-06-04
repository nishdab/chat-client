import React from "react";
import Image from "next/image";
import { ChatMessageProps } from "@/types/types";

const ChatMessage: React.FC<ChatMessageProps> = ({
  avatarSrc,
  sender,
  time,
  content,
}) => (
  <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px]">
    <Image
      height={32}
      width={32}
      className="w-8 relative rounded-10xs h-8 object-cover"
      alt=""
      src={avatarSrc}
    />
    <div className="flex-1 flex flex-col items-start justify-start gap-[3px_0px]">
      <div className="flex flex-row items-center justify-start gap-[0px_4px]">
        <div className="relative font-extrabold">{sender}</div>
        <div className="relative text-2xs font-medium text-darkslategray opacity-[0.7]">
          {time}
        </div>
      </div>
      <div className="self-stretch relative text-gray-400">{content}</div>
    </div>
  </div>
);

export default ChatMessage;

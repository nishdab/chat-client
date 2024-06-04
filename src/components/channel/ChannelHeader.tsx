import { Channel } from "@/types/types";
import Image from "next/image";

const ChannelHeader: React.FC<{ channel: Channel }> = ({ channel }) => {
  return (
    <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start text-base">
      <div className="self-stretch bg-slack-brand-ffffff flex flex-row items-center justify-between py-[9px] px-3.5 border-b-[1px] border-solid border-gray-600">
        <div className="flex flex-row items-center justify-start gap-[0px_10px]">
          <div className="flex flex-row items-center justify-start gap-[0px_4px]">
            <div className="relative font-extrabold">
              <Image
                className="relative w-5 h-5 object-cover"
                alt=""
                src={
                  channel?.isPrivate ? "/lock-channel.svg" : "/hashtag-thin.svg"
                }
                width={20}
                height={20}
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
              className="w-5 relative rounded-12xs h-5 object-cover"
              alt=""
              src="/no-photo-a.svg"
              width={20}
              height={20}
            />
            <Image
              className="w-5 relative rounded-12xs h-5 object-cover ml-[-6px]"
              alt=""
              src="/no-photo-b.svg"
              width={20}
              height={20}
            />
            <Image
              className="w-5 relative rounded-12xs h-5 object-cover ml-[-6px]"
              alt=""
              src="/no-photo-c.svg"
              width={20}
              height={20}
            />
          </div>
          <b className="relative opacity-[0.7]">4</b>
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;

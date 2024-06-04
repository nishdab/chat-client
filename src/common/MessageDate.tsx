import { useMemo } from "react";
import Image from "next/image";

const MessageDate: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-start relative text-left text-smi text-slack-brand-1d1c1d font-lato self-stretch">
      <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 z-[0]">
        <div className="self-stretch bg-slack-ui-dddddd h-px overflow-hidden shrink-0" />
      </div>
      <div className="!m-[0] absolute top-[calc(50%_-_14px)] left-[calc(50%_-_74.5px)] rounded-81xl bg-slack-brand-ffffff shadow-[0px_0px_0px_1px_rgba(29,_28,_29,_0.13),_0px_1px_3px_rgba(0,_0,_0,_0.08)] h-7 overflow-hidden flex flex-row items-center justify-center pt-0 pb-px pr-2 pl-4 box-border gap-[0px_4px] z-[1]">
        <b className="relative leading-[27px]">Friday, May 12th</b>
        <Image
          className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/chevrondown.svg"
          width={12}
          height={12}
        />
      </div>
    </div>
  );
};

export default MessageDate;

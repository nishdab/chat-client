import Image from "next/image";
import React from "react";

interface ItemProps {
  svg: string;
  timeTracking: string;
}

const Item: React.FC<ItemProps> = ({ svg, timeTracking }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-5 pr-[33px] pl-[43px] gap-[15px] text-left text-base text-clickupcom-nero font-clickupcom-inter-black-14 mq450:flex-wrap mq450:pl-5 mq450:box-border">
      <Image
        className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
        loading="lazy"
        alt=""
        src={svg}
        height={32}
        width={32}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[149px]">
        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[25px] font-medium inline-block min-w-[109px] shrink-0 [debug_commit:f6aba90]">
              {timeTracking}
            </div>
          </div>
          <div className="h-[27px] flex-1 relative min-w-[59px] shrink-0 [debug_commit:f6aba90]">
            <Image
              className="absolute top-[0px] left-[61.8px] w-[59px] h-7 overflow-hidden"
              loading="lazy"
              alt=""
              src="/switch-off.svg"
              width={59}
              height={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

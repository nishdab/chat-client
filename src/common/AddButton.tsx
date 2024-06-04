import React from "react";
import Image from "next/image";
import { AddMenuButtonType } from "@/types/types";

const AddMenuButton: React.FC<AddMenuButtonType> = ({ type, onClick }) => {
  return (
    <div
      className="cursor-pointer flex flex-row items-center justify-start py-1 pr-2.5 pl-3 box-border gap-[0px_8px] text-left text-mini text-slack-ui-ffffff-70 font-lato self-stretch"
      onClick={onClick}
    >
      <div className="rounded bg-slack-ui-ffffff-10 flex flex-row items-start justify-start p-1">
        <Image
          className="w-3 relative h-3 overflow-hidden shrink-0"
          alt=""
          src="/plus.svg"
          width={12}
          height={12}
        />
      </div>
      <div className="relative leading-[15px]">{type}</div>
    </div>
  );
};

export default AddMenuButton;

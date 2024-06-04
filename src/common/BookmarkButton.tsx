import React from "react";
import Image from "next/image";

const BookmarkButton: React.FC = () => {
  return (
    <div className="rounded-md flex flex-row items-center justify-start py-[3px] pr-1.5 pl-0.5 gap-[0px_2px] text-left text-smi text-slack-ui-616061 font-lato">
      <div className="w-5 h-5 flex flex-row items-center justify-center">
        <Image
          className="w-3 relative h-3 overflow-hidden shrink-0"
          alt=""
          src="/plus.svg"
          width={12}
          height={12}
        />
      </div>
      <div className="relative leading-[133%]">Add a bookmark</div>
    </div>
  );
};

export default BookmarkButton;

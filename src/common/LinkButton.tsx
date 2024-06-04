import React from "react";
import { useCommands, useChainedCommands } from "@remirror/react";
import Image from "next/image";
import { LinkButtonProps } from "@/types/types";

const LinkButton: React.FC<LinkButtonProps> = ({ img }) => {
  const { updateLink } = useCommands();
  const chain = useChainedCommands();
  const handleLinkClick = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      updateLink({ href: url });
      chain.focus().run();
    }
  };

  return (
    <div
      className="rounded flex flex-row items-center justify-center p-[5px] opacity-[0.5] cursor-pointer"
      onClick={handleLinkClick}
    >
      <Image
        className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        alt=""
        src={img}
        width={20}
        height={20}
      />
    </div>
  );
};

export default LinkButton;

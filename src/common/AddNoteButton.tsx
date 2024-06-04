import React from "react";
import Image from "next/image";

const AddNoteButton: React.FC = () => {
  return (
    <div className="rounded flex flex-row items-start justify-start p-1">
      <Image
        className="w-5 relative h-5 overflow-hidden shrink-0"
        alt=""
        src="/addnote.svg"
        width={20}
        height={20}
      />
    </div>
  );
};

export default AddNoteButton;

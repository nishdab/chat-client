import Image from "next/image";
import { MessageTypeProps } from "@/types/types";

const MessageType: React.FC<MessageTypeProps> = ({
  type,
  isExpanded,
  setIsExpanded,
}) => {
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="flex flex-row items-center justify-start py-0 pr-4 pl-2"
      onClick={toggleExpansion}
    >
      <div className="rounded flex flex-row items-start justify-start p-1">
        <Image
          className={`w-[18px] h-[18px] transform ${
            isExpanded ? "rotate-0" : "rotate-180"
          }`}
          alt=""
          src="/caretdown.svg"
          width={18}
          height={18}
        />
      </div>
      <div className="rounded-md flex flex-row items-start justify-start py-0 pr-0 pl-[5px] text-left text-mini text-slack-ui-ffffff-70 font-lato">
        <div className="h-7 flex flex-row items-center justify-center">
          <div className="relative leading-[15px]">{type}</div>
        </div>
        <div className="w-5 h-7 hidden flex-row items-center justify-center">
          <Image
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/chevrondown.svg"
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageType;

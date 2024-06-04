import React from "react";
import Image from "next/image";
import { MessageProfileProps } from "@/types/types";

const OnlineTrueSelectedFalse: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-start p-[5px]">
      <div className="w-2.5 relative rounded-[50%] bg-slack-brand-007a5a h-2.5" />
    </div>
  );
};

const MessageProfileHeader: React.FC<MessageProfileProps> = ({
  appTag = true,
  user,
  openProfileDialogue,
}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[0px_12px] text-left text-lg text-slack-brand-1d1c1d font-lato">
      <div className="rounded overflow-hidden flex flex-row items-start justify-start">
        <Image
          height={102}
          width={102}
          className="w-[102px] relative h-[102px] object-cover cursor-pointer"
          alt=""
          src={user?.imgSrc}
          onClick={() =>
            openProfileDialogue && openProfileDialogue({ name: user?.name })
          }
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_4px]">
        <div className="flex flex-row items-center justify-start gap-[0px_4px] cursor-pointer">
          <b
            className="relative leading-[27px]"
            onClick={() =>
              openProfileDialogue && openProfileDialogue({ name: user?.name })
            }
          >
            {user?.name}
          </b>
          {appTag && (
            <div className="rounded-sm bg-slack-ui-1d1c1d-13 flex flex-row items-center justify-center py-px px-[3px] text-3xs text-slack-ui-1d1c1d-70">
              <div className="relative leading-[12px] font-semibold">APP</div>
            </div>
          )}
        </div>
        <OnlineTrueSelectedFalse />
      </div>
    </div>
  );
};

const MessageProfileUserDescription: React.FC<MessageProfileProps> = ({
  user,
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-start py-0.5 px-0 box-border gap-[0px_2px] text-left text-mid-6 text-slack-brand-1d1c1d font-lato">
      {user?.you ? (
        <div>
          <div className="relative leading-[150%] font-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            This is your space.
          </div>
          <div className="relative leading-[150%] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Draft messages, make to-do lists or keep links and files to hand.
            You can also talk to yourself here, but please bear in mind you’ll
            have to provide both sides of the conversation.
          </div>
        </div>
      ) : (
        <div className="relative leading-[150%]">
          This conversation is just between {user?.name} and you. Check out
          their profile to learn more about them.
        </div>
      )}
    </div>
  );
};

export { MessageProfileHeader, MessageProfileUserDescription };

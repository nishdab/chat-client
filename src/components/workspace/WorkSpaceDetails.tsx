import React, { useCallback } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { getFirstLetters } from "@/lib/comman";

interface WorkspaceProps {
  name: string;
  imageUrl: string;
  memberCount: number;
  redirectUrl: string;
}

const WorkspaceDetails: NextPage<WorkspaceProps> = ({
  name,
  imageUrl,
  memberCount,
  redirectUrl,
}) => {
  const onLinkClick = useCallback(() => {
    window.open(redirectUrl);
  }, [redirectUrl]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start px-0 w-full text-left text-base-9 text-slackcom-black font-slackcom-inter-bold-1688">
      <div className="self-stretch rounded-t-none bg-slackcom-nero flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start p-4 max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px]">
            <button className="cursor-pointer [border:none] py-0 pr-4 pl-0 bg-[transparent] h-[75px] flex flex-col items-start justify-center max-w-[982px] mq975:max-w-full">
              {imageUrl ? (
                <Image
                  className="w-[75px] h-[75px] relative rounded-8xs overflow-hidden shrink-0 object-cover max-w-[966px] mq975:max-w-full"
                  alt=""
                  src={imageUrl}
                  width={75}
                  height={75}
                />
              ) : (
                <div className="w-[75px] h-[75px] flex items-center justify-center text-2xl bg-grey-200 text-gray-600 rounded-8xs">
                  <span className="text-3xl text-gray-600 dark:text-gray-300">
                    {getFirstLetters(name)}
                  </span>
                </div>
              )}
            </button>
            <div className="w-[172px] flex flex-col items-start justify-center py-3 px-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="relative inline-block min-w-[69px]">{name}</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-smi text-slackcom-dove-gray">
                  <div className="h-5 flex-1 flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border">
                    {[...Array(memberCount).slice(0, 7)].map((_, index) => {
                      const randomLetter = String.fromCharCode(
                        97 + Math.floor(Math.random() * 6)
                      );
                      return (
                        <Image
                          key={index}
                          className="h-5 w-5 relative rounded overflow-hidden shrink-0 object-cover max-w-[94px] min-h-[20px]"
                          alt=""
                          src={`/no-photo-${randomLetter}.svg`} // Use random letter in the image source
                          width={20}
                          height={20}
                        />
                      );
                    })}
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[20px] inline-block min-w-[78px] max-h-[20px]">
                      {memberCount} members
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start">
              <button
                className="cursor-pointer [border:none] py-4 px-[15px] bg-slackcom-honey-flower rounded flex flex-col items-center justify-start box-border whitespace-nowrap hover:bg-darkslateblue"
                onClick={onLinkClick}
              >
                <a
                  className="self-stretch relative text-sm-9 tracking-[0.8px] leading-[18px] uppercase font-bold font-slackcom-inter-bold-1688 text-slackcom-nero text-center inline-block [text-decoration:none] min-w-[120px]"
                  href={redirectUrl}
                  target="_blank"
                >
                  Open Workspace
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDetails;

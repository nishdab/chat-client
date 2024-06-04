import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SearchBarProps, WorkspaceProps } from "@/types/types";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";

const SearchBar: React.FC<SearchBarProps> = ({ profilePhoto }) => {
  const router = useRouter();
  const { orgData } = useAppSelector((state) => state.organization);
  const { workSpaceId } = router.query;
  const [selectedWorkspaceName, setSelectedWorkspaceName] = useState<string>(
    ""
  );

  useEffect(() => {
    const selectedWorkspace = orgData?.find(
      (workspace: WorkspaceProps) => workspace.organizationId === workSpaceId
    );

    const newName = selectedWorkspace ? selectedWorkspace.name : "";
    setSelectedWorkspaceName(newName);
  }, [workSpaceId, orgData]);

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-slack-ui-350d36 shadow-[0px_1px_0px_rgba(255,_255,_255,_0.1)] text-sm text-slack-brand-ffffff font-lato">
      {/* First empty space always on the left */}
      <div className="items-center gap-12"></div>

      {/* Second div always on the center */}
      <div className="flex items-center gap-12">
        <div className="hidden md:flex rounded flex flex-row items-start justify-start p-[3px] opacity-[0.8]">
          <Image
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/clock.svg"
            width={20}
            height={20}
          />
        </div>
        <div className="md:w-[400px] sm:w-[200px] lg:w-[700px] rounded-md bg-slack-ui-ffffff-20 shadow-[0px_0px_0px_1px_rgba(29,_28,_29,_0.3),_0px_1px_3px_rgba(0,_0,_0,_0.08)] shrink-0 flex flex-col items-center justify-center py-1 px-2 box-border relative gap-[4px_0px] text-left text-smi text-slack-brand-ffffff font-lato">
          <div className="flex flex-row items-center justify-start z-[0]">
            <Image
              className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
              alt=""
              src="/search.svg"
              width={15}
              height={15}
            />
            <div className="flex flex-row items-center justify-center py-0 pr-11 pl-2">
              <div className="relative leading-[138%]">
                Search {selectedWorkspaceName}
              </div>
            </div>
          </div>
          <div className="!m-[0] absolute h-[calc(100%_-_10px)] top-[5px] right-[2px] bottom-[5px] flex flex-row items-start justify-start py-0 px-1 box-border z-[1]">
            <Image
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/settings.svg"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>

      {/* Third and last div always on the right */}
      <div className="flex items-center gap-2 md:gap-12">
        <div className="hidden md:flex rounded flex items-center justify-center p-[3px] opacity-[0.8]">
          <Image
            width={20}
            height={20}
            className="w-5 h-5"
            alt=""
            src="/help.svg"
          />
        </div>

        <div className="flex flex-row items-start justify-start relative">
          <div className="w-5 relative h-5 z-[0] h-[26px] w-[26px]">
            <div className="absolute top-[0px] left-[0px] rounded-[3.08px] overflow-hidden flex flex-row items-start justify-start">
              <Image
                className="w-5 relative h-5 object-cover h-[26px] w-[26px]"
                alt=""
                src={profilePhoto}
                width={20}
                height={20}
              />
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-[3.08px] bg-slack-ui-ffffff-13 w-5 h-5 overflow-hidden hidden h-[26px] w-[26px]" />
          </div>

          <Image
            className="w-[7px] absolute !m-[0] top-[19px] left-[20px] h-[7px] z-[1] "
            alt=""
            src="/status.svg"
            width={7}
            height={7}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

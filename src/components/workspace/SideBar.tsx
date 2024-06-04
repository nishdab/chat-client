import { getFirstLetters } from "@/lib/comman";
import { WorkspaceSidebarProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = ({
  workSpaceList,
  activeWorkspace,
  onWorkspaceClick,
}) => {
  return (
    <div className="w-14 px-3 pt-3 pb-3 bg-fuchsia-950 border-r border-zinc-700 flex flex-col justify-start items-center gap-4">
      {workSpaceList?.map((workSpace, index) => (
        <div
          key={index}
          className={`w-6 h-6 relative rounded-full bg-white p-[5px] cursor-pointer ${
            workSpace.organizationId === activeWorkspace
              ? "ring-4 ring-green-500"
              : ""
          }`}
          onClick={() => onWorkspaceClick(workSpace.organizationId)}
        >
          <div className="w-full h-full rounded-lg overflow-hidden">
            {workSpace.profilePicture ? (
              <Image
                className="w-full h-full object-cover"
                alt=""
                src={workSpace.profilePicture}
                height={20}
                width={20}
              />
            ) : (
              <div className="h-[25px] flex items-center justify-center text-2xl bg-grey-200 text-gray-600 rounded-8xs">
                <span className="text-gray-600 dark:text-gray-300 text-[12px]">
                  {getFirstLetters(workSpace.name)}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="w-9 h-9 relative">
        <button
          className="w-full h-full p-2 bg-transparent border-none cursor-pointer"
          onClick={() => {
            window.open("/workspace/setup", "_blank");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { WorkspaceProps } from "@/types/types";
import { useRouter } from "next/router";

const WorkSpaceName: React.FC = () => {
  const router = useRouter();
  const { orgData } = useAppSelector((state) => state.organization);
  const { workSpaceId } = router.query;
  const [selectedWorkspaceName, setSelectedWorkspaceName] = useState<string>(
    ""
  );

  useEffect(() => {
    const selectedWorkspace = orgData.find(
      (workspace: WorkspaceProps) => workspace.organizationId === workSpaceId
    );

    const newName = selectedWorkspace ? selectedWorkspace.name : "";
    setSelectedWorkspaceName(newName);
  }, [workSpaceId, orgData]);

  return (
    <div className="rounded-md flex flex-row items-center justify-start py-1 pr-1 pl-2 text-left text-lg text-slack-brand-ffffff font-lato">
      <div className="flex flex-row items-center justify-center">
        <b className="relative leading-[133%]">{selectedWorkspaceName}</b>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-px"></div>
    </div>
  );
};

export default WorkSpaceName;

import React, { useEffect, useState } from "react";
import SearchBar from "@/common/SearchBar";
import WorkspaceSidebar from "@/components/workspace/SideBar";
import SideBar from "@/components/sidbar/Sidebar";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { useRouter } from "next/router";
import { channelAction } from "@/slices/channelSlice";

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  const { dispatch } = useAppStore();

  const { workSpaceId } = router.query;
  const { orgData } = useAppSelector((state) => state.organization);
  const [activeWorkSpace, setActiveWorkSpace] = useState<string>(
    Array.isArray(workSpaceId) ? workSpaceId.join("/") : workSpaceId || ""
  );

  useEffect(() => {
    setActiveWorkSpace(
      Array.isArray(workSpaceId) ? workSpaceId.join("/") : workSpaceId || ""
    );
  }, [workSpaceId]);

  return (
    <div className="flex flex-col h-screen bg-slack-ui-3f0e40">
      <SearchBar profilePhoto="/ali@2x.png" />
      <div className="flex flex-1">
        <WorkspaceSidebar
          workSpaceList={orgData}
          activeWorkspace={activeWorkSpace}
          onWorkspaceClick={(workSpace: string) => {
            setActiveWorkSpace(workSpace);
            router.push(`/workspace/${workSpace}`);
            dispatch(channelAction.clearChannel());
          }}
        />
        <div className="w-3/10">
          <SideBar />
        </div>
        <div className="flex flex-col w-7/10 w-full">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;

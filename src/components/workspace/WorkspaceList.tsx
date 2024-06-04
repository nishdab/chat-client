import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import Loader from "@/common/Loader";
import CreateNewWorkspace from "./CreateNewWorkspace";
import { useRouter } from "next/router";
import { fetchOrgData } from "@/slices/orgSlice";
import WorkspaceDetails from "./WorkSpaceDetails";
import { useAppSelector, useAppStore } from "@/store/hooks";

const WorkspaceList: NextPage = () => {
  const router = useRouter();
  const { dispatch } = useAppStore();

  const { orgData, status, error } = useAppSelector(
    (state) => state.organization
  );

  useEffect(() => {
    dispatch(fetchOrgData());
  }, [dispatch]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/auth/login");
  }, [router]);

  if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center font-lato">
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="w-full h-screen flex items-center justify-center font-lato">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-lato bg-slack-ui-3f0e40">
      <div className="w-full max-w-[1026px] px-5 py-1.5 flex flex-col items-start justify-start gap-4 mt-[50px] mb-[20px]">
        <header className="flex items-start">
          <div>
            <b className="text-6xl text-slackcom-nero font-slackcom-inter-bold-1688">
              👋🏻 Welcome back
            </b>
          </div>
        </header>
        <section className="w-full flex flex-col items-center justify-start">
          <div className="w-full [border:none] [outline:none] bg-slackcom-prim self-stretch h-[82px] rounded-t-8xs rounded-b-none flex flex-row items-center justify-start py-[30.5px] px-4 box-border font-slackcom-inter-bold-1688 text-mid text-slackcom-black min-w-[250px] min-h-[82px] font-lato">
            Workspace for xyz@company.com
          </div>
          {orgData && orgData.length > 0 ? (
            orgData.map((org: any) => (
              <WorkspaceDetails
                key={org.id}
                name={org.name}
                imageUrl={org.imageUrl}
                memberCount={org.memberCount}
                redirectUrl={`/workspace/${org.organizationId}`}
              />
            ))
          ) : (
            <div className="text-white m-10">
              You {`don't`} have any workspace, Create one!
            </div>
          )}
        </section>
        <CreateNewWorkspace />
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <div className="text-mid text-white">
            Not seeing your workspace? {"     "}
            <a
              href="https://slack.com/intl/en-in/signin"
              target="_blank"
              className="text-slackcom-picton-blue"
              onClick={onLinkContainerClick}
            >
              Try using a different email address
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceList;

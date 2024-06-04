import React, { useState } from "react";
import SearchBar from "@/common/SearchBar";
import WorkspaceNameStep from "@/components/workspace/WorkSpaceNameStep";
import UserProfileStep from "@/components/workspace/UserProfileStep";
import InviteUserStep from "@/components/workspace/InviteUserStep";
import CreateChannelStep from "@/components/workspace/CreateChannelStep";
import SetupSideBar from "@/components/workspace/SetupSideBar";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { useRouter } from "next/router";
import { createOrg } from "@/slices/orgSlice";
import Loader from "@/common/Loader";

const Setup: React.FC = () => {
  const { dispatch } = useAppStore();
  const router = useRouter();

  const status = useAppSelector((state) => state.organization.status);

  const [spaceName, setSpaceName] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [channelName, setChannelName] = useState<string>("");
  const [invitedUsers, setInvitedUsers] = useState<string[]>([]);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleCreateWorkspace = async () => {
    try {
      await dispatch(createOrg({ name: spaceName }));

      router.push("/workspace");
    } catch (error) {
      console.error("Error creating organization:", error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <WorkspaceNameStep
            spaceName={spaceName}
            setSpaceName={setSpaceName}
          />
        );
      case 2:
        return <UserProfileStep />;
      case 3:
        return (
          <InviteUserStep
            setInvitedUsers={setInvitedUsers}
            invitedUsers={invitedUsers}
            spaceName={spaceName}
          />
        );
      case 4:
        return (
          <CreateChannelStep
            channelName={channelName}
            setChannelName={setChannelName}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slack-ui-3f0e40">
      <SearchBar profilePhoto="/no-photo-b.svg" />
      <div className="flex flex-1">
        <div className="w-3/10">
          <SetupSideBar
            spaceName={spaceName}
            invitedUsers={invitedUsers}
            channel={channelName}
          />
        </div>

        <div className="flex flex-col w-7/10 w-full bg-white font-lato">
          <section className="flex-1 flex flex-col items-start justify-start pt-10 px-4 pb-0 box-border max-w-[calc(100% - 2rem)] text-left text-4xl md:text-6xl text-lightgray-200 font-larsseit">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 md:gap-16">
              <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
                <b className="relative text-mini text-grey-600">
                  Step {currentStep} of 4
                </b>
                {renderStepContent()}
              </div>

              {currentStep === 4 ? (
                <button
                  className="pt-3 px-4 pb-3 rounded w-full md:w-auto flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer"
                  onClick={handleCreateWorkspace}
                >
                  <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0" />
                  <div className="relative inline-block min-w-24 text-center font-lato">
                    {status === "loading" ? <Loader /> : "Create Workspace"}
                  </div>
                </button>
              ) : (
                <button
                  className={`pt-3 px-4 pb-3 rounded w-full md:w-auto flex items-center justify-center relative ${
                    spaceName === ""
                      ? "bg-gray-600 text-white cursor-not-allowed"
                      : "bg-gray-700 hover:bg-gray-800 text-white cursor-pointer"
                  }`}
                  onClick={handleNextStep}
                  disabled={spaceName === ""}
                >
                  <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0" />
                  <div className="relative inline-block min-w-24 text-center font-lato">
                    Next
                  </div>
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Setup;

import { InviteUserStepProps } from "@/types/types";
import React from "react";

const InviteUserStep: React.FC<InviteUserStepProps> = ({
  spaceName,
  invitedUsers,
  setInvitedUsers,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const emails = e.target.value.split(",").map((email) => email.trim());
    setInvitedUsers(emails);
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8 font-lato">
      <h1 className="m-0 w-full relative font-bold flex items-center max-w-[calc(100% - 3rem)] text-4xl">
        Who else is on the {spaceName} team ?
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
        <b className="w-full relative inline-block max-w-[calc(100% - 3rem)] text-lg md:text-xl text-grey-600">
          Add colleagues by email
        </b>
        <div className="self-stretch flex flex-row items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-4 md:gap-8">
          <div className="flex flex-row items-center relative w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] box max-w-[calc(100% - 3rem)]">
            <textarea
              className="outline-none bg-transparent w-full box-border opacity-50 border-2 border-solid border-darkgray relative font-lato rounded pl-3"
              style={{ height: "100px" }}
              placeholder="Example ellis@yourdomain.com, maria@yourdomain.com ..."
              value={invitedUsers.join(", ")}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteUserStep;

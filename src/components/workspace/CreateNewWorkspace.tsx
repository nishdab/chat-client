import type { NextPage } from "next";

const CreateNewWorkspace: NextPage = () => {
  const openWorkspaceSetup = () => {
    window.open("/workspace/setup", "_blank");
  };
  return (
    <section className="w-full flex flex-row items-start justify-start pt-0 pb-[23px] pl-0 box-border text-left text-mid-2 text-slackcom-black font-slackcom-inter-bold-1688">
      <div className="flex-1 rounded-4xs flex flex-col items-start justify-start p-1 px-0 max-w-full">
        <div className="self-stretch rounded-8xs bg-slackcom-nero flex flex-row flex-wrap items-center justify-center p-4 box-border gap-[32px] max-w-full mq700:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px] box-border min-w-[318px] max-w-full">
            <b className="relative leading-[26px] inline-block max-w-[472.69000244140625px] mq700:max-w-full">
              Want to use Chat app with a different team?
            </b>
          </div>
          <button
            className="cursor-pointer [border:none] py-4 pr-[15px] pl-4 bg-slackcom-nero w-[245.3px] rounded shadow-[0px_0px_0px_1px_#611f69_inset] overflow-hidden shrink-0 flex flex-col items-center justify-start box-border whitespace-nowrap hover:bg-gainsboro-100"
            onClick={openWorkspaceSetup}
          >
            <div className="w-full relative text-sm-8 tracking-[0.8px] leading-[18px] uppercase font-bold font-slackcom-inter-bold-1688 text-slackcom-honey-flower text-center inline-block [text-decoration:none] max-w-[214px]">
              Create a new workspace
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateNewWorkspace;

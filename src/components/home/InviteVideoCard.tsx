import React from "react";

const InviteVideoCard: React.FC = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-1 pr-[11.5px] pl-3 box-border max-w-full shrink-0 text-center text-21xl text-mota-platform-webflow-io-1905x822-default-1-abbey font-appslackcom-lato-regular-176">
      <div className="flex-1 flex flex-row items-start justify-center gap-[79.5px] max-w-full mq800:gap-[79.5px_40px] mq450:gap-[79.5px_20px] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[417px] max-w-full mq800:gap-[20px_40px] mq800:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.96deg,_#45c4f9,_#7d09ff_50.33%,_#ff0be5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-13xl mq800:leading-[51px] mq450:text-5xl mq450:leading-[38px]">
            <p className="m-0">Unlock the Power of AI</p>
            <p className="m-0">Instantly Generate Invites Anytime, Anywhere!</p>
          </h1>
          <div className="self-stretch h-24 relative text-3xl-9 leading-[32px] inline-block mq450:text-lg mq450:leading-[26px]">
            <p className="m-0">
              Easily craft invites with just a quick prompt to your trusty AI
              chatbot. Invite anyone, anywhere, effortlessly!
            </p>
          </div>
        </div>
        <div className="rounded bg-gray-200 p-2 overflow-hidden">
          <video
            className="w-[900px] h-auto"
            autoPlay
            loop
            muted
            style={{ objectFit: "cover", objectPosition: "top" }}
          >
            <source src="invite.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default InviteVideoCard;

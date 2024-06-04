import React from "react";
import WorkspaceList from "@/components/workspace/WorkspaceList";
import { NextPage } from "next";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import InviteVideoCard from "@/components/home/InviteVideoCard";
import ReminderVideoCard from "@/components/home/ReminderVideoCard";
import Services from "@/components/home/Services";

const ChatApp: NextPage = () => {
  // return <WorkspaceList />;
  return (
    <>
      <div className="w-full relative bg-clickupcom-nero flex flex-col items-end justify-start pt-[274.5px] px-[73.9px] box-border gap-[144px] leading-[normal] tracking-[normal] mq800:gap-[72px_144px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq450:gap-[36px_144px] mq1350:h-auto mb-[50px] font-lato">
        <Navbar />
        <HeroSection />
        <InviteVideoCard />
        <ReminderVideoCard />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[5px] pl-0 box-border max-w-full shrink-0 text-center text-[47px] text-clickupcom-ebony-clay font-clickupcom-inter-black-14 font-lato">
          <div className="w-[645px] flex flex-col items-end justify-start gap-[54px] max-w-full mq800:gap-[27px_54px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-7">
              <h1 className="m-0 w-[433px] relative text-inherit leading-[60px] font-black font-inherit text-transparent !bg-clip-text [background:linear-gradient(83.96deg,_#45c4f9,_#7d09ff_50.33%,_#ff0be5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq800:text-[38px] mq800:leading-[48px] mq450:text-9xl mq450:leading-[36px]">
                <span className="w-full">
                  <p className="m-0">Everything your</p>
                  <p className="m-0">team is looking for</p>
                </span>
              </h1>
            </div>
            <div className="w-full relative text-xl leading-[27px] inline-block max-w-[675px] mq800:max-w-full mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
                <b>
                  GenieChat’s exceptional flexibility can handle any type of
                  work.
                </b>
                <span className="font-clickupcom-inter-black-14"> And</span>
              </p>
              <p className="m-0">we never stop innovating.</p>
            </div>
          </div>
        </section>
        <section className="flex flex-row items-start justify-center self-center py-0 pr-[51.1px] pl-[51px] box-border max-w-full shrink-0 mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border">
          <div className="w-[1120px] flex flex-col items-end justify-start py-0 px-0 box-border gap-[30px] max-w-[1200px] mq1350:max-w-full">
            <Services />
          </div>
        </section>
        <section className="flex flex-row items-start justify-center self-center py-0 pr-[51.1px] pl-[51px] box-border max-w-full shrink-0 mq1350:pl-[25px] mq1350:pr-[25px] mq1350:box-border">
          <div className="w-[1120px] self-stretch flex flex-col items-start justify-start pt-[33px] px-0 pb-0 border-t-[1px] border-solid border-grey-600">
            <div className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-5 flex flex-col items-start justify-start font-inter text-[12px] text-slategray min-w-[250px]">
              © 2024 GenieChat, Inc. All rights reserved.
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatApp;

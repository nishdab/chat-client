import { useRouter } from "next/router";
import React from "react";

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="w-full flex flex-row items-start justify-center pt-0 px-0 pb-[85.5px] box-border max-w-full shrink-0 text-center text-21xl text-mota-platform-webflow-io-1905x822-default-1-abbey font-appslackcom-lato-regular-176 mq800:pb-14 mq800:box-border font-lato">
      <div className="w-[640px] flex flex-col items-center justify-start gap-[40px] max-w-full mq800:gap-[20px_40px]">
        <h1 className="m-0 w-[500px] relative text-inherit leading-[64px] font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(266.91deg,_#fa12e3,_#7612fa_40.89%,_#12d0fa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center max-w-full mq800:text-13xl mq800:leading-[51px] mq450:text-5xl mq450:leading-[38px]">
          <span className="w-full">
            <p className="m-0">The All-in-One</p>
            <p className="m-0">Team Communication App</p>
            <p className="m-0">Powered by AI</p>
          </span>
        </h1>
        <div className="self-stretch relative text-3xl-9 leading-[32px] mq450:text-lg mq450:leading-[26px]">
          <p className="m-0">
            GenieChat for companies and organizations that improves team
            communication and productivity. Having the best collaboration
            features delivered in a single package.
          </p>
          <p className="m-0 font-spartan">&nbsp;</p>
        </div>
        <button
          className="cursor-pointer py-[3.5px] px-[3px] bg-clickupcom-nero rounded-[12px] shadow-[0px_4px_6px_rgba(67,_46,_134,_0.04)] flex flex-row items-center justify-center border-[1px] border-solid border-clickupcom-periwinkle-gray"
          onClick={() => router.push("/auth/signup")}
        >
          <div className="flex flex-col items-start justify-start py-[11px] px-3">
            <div className="relative text-sm font-appslackcom-lato-regular-176 text-clickupcom-ebony-clay text-left">
              TRY GENIECHAT - IT’S FREE
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

import Navbar from "@/components/home/Navbar";
import PricingComponent from "@/components/pricing/index";
import React from "react";

const Pricing: React.FC = () => {
  return (
    <>
      <div className="w-full relative bg-clickupcom-nero flex flex-col items-end justify-start pt-[274.5px] px-[73.9px] box-border gap-[144px] leading-[normal] tracking-[normal] mq800:gap-[72px_144px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq450:gap-[36px_144px] mq1350:h-auto mb-[50px] font-lato">
        <Navbar />
        <PricingComponent />
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

export default Pricing;

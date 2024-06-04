import { useRouter } from "next/router";
import React from "react";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <section className="mt-[-281.2px] self-stretch h-[137.2px] flex flex-row items-start justify-end pt-0 pb-[13.5px] pr-[48.6px] pl-[49px] box-border max-w-full shrink-0 mq1350:pl-6 mq1350:pr-6 mq1350:box-border">
      <header className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7.2px] opacity-[0.9] max-w-full">
        <div className="absolute inset-0 bg-cover bg-center filter blur-[5px]">
          <img
            className="absolute inset-0 w-[82.93%] top-[-0.79%] right-[8.5%] bottom-[92.3%] left-[8.57%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.5]"
            alt=""
            src="https://3dicons.co/3d-gradient.svg"
          />
        </div>
        <div className="w-full flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full mt-10">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div
              className="flex items-center gap-[25px] cursor-pointer"
              onClick={() => router.push("/workspace")}
            >
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/chatsvgrepocom-2-1.svg"
              />
              <div className="flex flex-col ml-2 cursor-pointer">
                <span className="text-[25px] font-lato uppercase text-clickupcom-ebony-clay text-left min-w-[75px] whitespace-nowrap">
                  geniechat
                </span>
              </div>
            </div>
            <div className="w-[279px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <button
                  className="cursor-pointer py-[14.5px] px-[18px] bg-clickupcom-nero rounded-[12px] shadow-[0px_4px_6px_rgba(67,_46,_134,_0.04)] flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-clickupcom-periwinkle-gray hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-lightsteelblue-200"
                  onClick={() => router.push("/pricing")}
                >
                  <div className="relative text-sm font-clickupcom-inter-black-14 text-clickupcom-ebony-clay text-left inline-block ">
                    Pricing
                  </div>
                </button>
                <button className="cursor-pointer py-[14.5px] px-[18px] bg-clickupcom-nero rounded-[12px] shadow-[0px_4px_6px_rgba(67,_46,_134,_0.04)] flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-clickupcom-periwinkle-gray hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-lightsteelblue-200">
                  <div className="relative text-sm font-clickupcom-inter-black-14 text-clickupcom-ebony-clay text-left inline-block min-w-[75px]">
                    Contact Us
                  </div>
                </button>
                <div
                  className="rounded-[12px] bg-clickupcom-nero shadow-[0px_4px_6px_rgba(67,_46,_134,_0.04)] flex flex-row items-start justify-start p-[5px] gap-[3px] border-[1px] border-solid border-clickupcom-periwinkle-gray"
                  onClick={() => router.push("/auth/login")}
                >
                  <button className="cursor-pointer [border:none] py-[9.5px] px-3 bg-[transparent] rounded-4xs flex flex-row items-start justify-start">
                    <div className="relative text-sm font-clickupcom-inter-black-14 text-clickupcom-ebony-clay text-left inline-block [text-decoration:none] min-w-[41px] max-h-[36px] whitespace-nowrap">
                      Log in
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] pt-[9px] px-3 pb-2.5 bg-[transparent] rounded-4xs [background:linear-gradient(266.91deg,_#fa12e3,_#7612fa_40.89%,_#12d0fa)] shadow-[1px_1px_0px_rgba(0,_0,_0,_0.2)_inset,_-1px_-1px_0px_rgba(0,_0,_0,_0.2)_inset] flex flex-row items-start justify-start z-[1]"
                    onClick={() => router.push("/auth/signup")}
                  >
                    <div className="h-9 w-[78px] relative rounded-4xs [background:linear-gradient(262.61deg,_#fa12e3,_#7612fa_74.17%)] shadow-[1px_1px_0px_rgba(0,_0,_0,_0.2)_inset,_-1px_-1px_0px_rgba(0,_0,_0,_0.2)_inset] hidden" />
                    <div className="h-9 w-[78px] relative rounded-4xs [background:linear-gradient(266.91deg,_#fa12e3,_#7612fa_40.89%,_#12d0fa)] shadow-[1px_1px_0px_rgba(0,_0,_0,_0.2)_inset,_-1px_-1px_0px_rgba(0,_0,_0,_0.2)_inset] hidden" />
                    <div className="relative text-sm font-black font-clickupcom-inter-black-14 text-clickupcom-nero text-left inline-block min-w-[54px] whitespace-nowrap z-[2]">
                      Sign Up
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;

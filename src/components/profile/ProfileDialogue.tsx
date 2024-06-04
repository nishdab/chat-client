import { ProfileDialogProps } from "@/types/types";
import type { NextPage } from "next";
import Image from "next/image";

const ProfileDialog: NextPage<ProfileDialogProps> = ({ onClose }) => {
  return (
    <div className="font-lato bg-slackcom-nero flex flex-col items-start justify-start pt-0 px-0 pb-[265.60000000000036px] box-border gap-[12px] tracking-[normal] text-left text-mini text-appslackcom-thunder font-appslackcom-lato-bold-15">
      <section className="self-stretch h-[321px] flex flex-col items-start justify-start">
        <div className="self-stretch bg-slackcom-nero shadow-[0px_1px_0px_rgba(29,_28,_29,_0.13)] flex flex-col items-start justify-start py-0 pr-3 pl-4">
          <div className="self-stretch flex flex-row items-center justify-start py-[6.5px] px-0">
            <div className="w-[calc(100%_-_20px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-col items-start justify-start font-appslackcom-lato-bold-15 font-black text-lg text-appslackcom-thunder min-w-[53.90999984741211px]">
              Profile
            </div>
            <div
              className="h-9 rounded flex flex-row items-center justify-center p-2 box-border cursor-pointer"
              onClick={onClose}
            >
              <Image
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/close-button.svg"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[19px] pl-[19.5px]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-4 px-4 pb-0 box-border max-w-[288px]">
            <div className="self-stretch flex-1 rounded-lg bg-appslackcom-alto overflow-hidden flex flex-row items-start justify-start relative">
              <Image
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/no-photo-a.svg"
                height={20}
                width={20}
              />
              <div className="self-stretch flex-1 relative rounded-md bg-appslackcom-nero-02 shadow-[0px_0px_0px_1px_rgba(29,_28,_29,_0.05)_inset] overflow-hidden z-[1]" />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row items-start justify-start py-0 px-3.5 text-3xl">
        <h3 className="m-0 relative text-inherit leading-[30px] font-black font-inherit inline-block min-w-[85px]">
          Company name
        </h3>
      </div>
      <div className="self-stretch h-[53.9px] flex flex-row items-start justify-start py-0 px-4 box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start pt-0 pb-[1.899999999999636px] pr-[230px] pl-0 gap-[8px]">
            <Image
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/offline-status.svg"
              height={20}
              width={20}
            />
            <div className="relative leading-[22px] inline-block min-w-[37px] max-w-[295px]">
              Away
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[133px] pl-0">
            <div className="h-5 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
              <Image
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/clock.svg"
                height={20}
                width={20}
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[22px] whitespace-nowrap">
                11:06 AM local time
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start pt-[17px] px-4 pb-6 text-left text-mini text-appslackcom-thunder font-appslackcom-lato-bold-15 border-t-[1px] border-solid border-grey-300">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4">
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="relative leading-[22px] font-black flex items-center max-w-[295px] box-border pr-5">
              Contact information
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[131.4px] pl-0 text-smi text-appslackcom-thunder-70">
          <div className="flex flex-col items-center justify-start py-0 pr-2 pl-0">
            <div className="rounded bg-appslackcom-thunder-4 flex flex-col items-start justify-start pt-[7px] px-2 pb-[9px]">
              <div className="flex flex-row items-center justify-center">
                <div className="h-5 flex flex-col items-start justify-start">
                  <Image
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/mail-icon.svg"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="relative leading-[18px] inline-block min-w-[80px] max-w-[119.58000183105469px]">
                Email address
              </b>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-1 pr-[3.5999999999999943px] pl-1 box-border max-w-[119.58000183105469px] text-mini text-appslackcom-tory-blue">
              <a
                className="relative leading-[22px] text-[inherit] inline-block [text-decoration:none] min-w-[112px] max-w-[112px] whitespace-nowrap cursor-pointer"
                href="mailto:hr@company.com"
                target="_blank"
                // onClick={onLinkMenuClick}
              >
                hr@company.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDialog;

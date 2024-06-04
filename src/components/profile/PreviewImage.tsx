import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface PreviewImageProps {
  imgSrc: string;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
}
const PreviewImage: NextPage<PreviewImageProps> = ({
  imgSrc,
  setShowPreview,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center font-lato">
      <header className="self-stretch rounded-t-lg rounded-b-none bg-slackcom-nero overflow-hidden flex flex-row items-center justify-start py-0 pr-[0.20000000000001705px] pl-0 box-border min-h-[70px] top-[0] z-[99] sticky max-w-full text-left text-3xl text-appslackcom-thunder font-appslackcom-lato-bold-15">
        <div className="flex flex-col items-start justify-start py-0 pr-0 pl-4">
          <div className="rounded flex flex-row items-center justify-center py-2 px-1.5">
            <div className="h-5 flex flex-col items-start justify-start">
              <Image
                className="w-5 h-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/backIcon.svg"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-5 px-1 box-border min-h-[70px] max-w-full">
          <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
              <h3 className="m-0 relative text-inherit leading-[30px] font-black font-inherit whitespace-nowrap">
                Crop your photo
              </h3>
            </div>
          </div>
        </div>
      </header>
      <section className="self-stretch h-[600px] bg-slackcom-nero overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-7 box-border gap-[24px] min-h-[50px] text-left text-lg text-appslackcom-thunder font-appslackcom-lato-bold-15">
        <div className="self-stretch rounded bg-appslackcom-thunder-13 flex flex-row items-start justify-start max-w-full">
          <div className="h-[460px] flex-1 bg-slackcom-nero overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[166.41000366210938px] box-border relative max-w-[460px] mq450:max-w-full">
            <Image
              className="w-full h-[293.6px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-[460px] overflow-hidden shrink-0 object-cover mq450:max-w-full"
              loading="lazy"
              alt=""
              height={293.6}
              width={460}
              src="/no-photo-a.svg"
            />
            <div className="h-[294px] !m-[0] absolute top-[0px] left-[0px] bg-appslackcom-nero-02 shadow-[0px_0px_0px_149985px_rgba(0,_0,_0,_0.5)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[146px] px-0 gap-[284px] z-[1] border-[1px] border-solid border-appslackcom-thunder">
              <div className="mt-[-293px] ml-[-4px] w-[302px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] gap-[20px]">
                <div className="h-[9px] w-[9px] relative bg-appslackcom-black-20 box-border border-[1px] border-solid border-appslackcom-nero-70" />
                <div className="h-[9px] w-[9px] relative bg-appslackcom-black-20 box-border border-[1px] border-solid border-appslackcom-nero-70" />
              </div>
              <div className="ml-[-4px] w-[302px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] gap-[20px]">
                <div className="h-[9px] w-[9px] relative bg-appslackcom-black-20 box-border border-[1px] border-solid border-appslackcom-nero-70" />
                <div className="h-[9px] w-[9px] relative bg-appslackcom-black-20 box-border border-[1px] border-solid border-appslackcom-nero-70" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded flex flex-col items-start justify-start pt-6 px-0 pb-0 gap-[12px]">
          <div className="relative leading-[18px] inline-block min-w-[46px] max-w-[460px] mq450:max-w-full">
            Preview
          </div>
          <div className="w-[241.2px] flex flex-row items-start justify-start text-mini text-appslackcom-thunder">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <button className="cursor-pointer [border:none] py-0 pr-2 pl-0 bg-[transparent] h-[72px] flex flex-col items-start justify-start box-border">
                <Image
                  className="w-[72px] h-[72px] relative rounded-[3px] object-cover"
                  alt=""
                  width={72}
                  height={72}
                  src="/no-photo-a.svg"
                />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
              <div className="flex flex-row items-end justify-start">
                <div className="flex flex-col items-start justify-start py-0 px-0">
                  <div className="mr-[-0.30000000000000426px] relative leading-[22px] inline-block min-w-[115.9px] shrink-0 [debug_commit:f6aba90]">
                    <b>Nishant Dabre</b>
                    <span>  </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-2 relative rounded-981xl bg-appslackcom-alto" />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch rounded-t-none rounded-b-lg bg-slackcom-nero overflow-hidden flex flex-row items-center justify-end py-6 px-7">
        <div className="w-[172.9px] flex flex-row items-center justify-start py-0 pr-[0.09999999999990904px] pl-px box-border gap-[13px]">
          <button className="cursor-pointer pt-[7.5px] px-[15px] pb-[8.5px] bg-slackcom-nero flex-1 rounded box-border flex flex-row items-end justify-center min-w-[78px] border-[1px] border-solid border-appslackcom-thunder-30 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
            <b className="w-[46px] relative text-mini flex font-appslackcom-lato-bold-15 text-appslackcom-thunder text-center items-center justify-center min-w-[46px] max-h-[33px]">
              Cancel
            </b>
          </button>
          <button className="cursor-pointer [border:none] pt-[8.5px] px-6 pb-[9.5px] bg-appslackcom-tropical-rain-forest rounded flex flex-row items-end justify-center box-border min-w-[80px] hover:bg-seagreen">
            <b className="w-8 relative text-mini flex font-appslackcom-lato-bold-15 text-slackcom-nero text-center items-center justify-center min-w-[32px] max-h-[35px]">
              Save
            </b>
          </button>
        </div>
      </section>
    </div>
  );
};

export default PreviewImage;

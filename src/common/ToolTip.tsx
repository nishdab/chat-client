import Image from "next/image";
import React from "react";

interface UserBasicInfo {
  name: string;
  imgSrc: string;
}

const ToolTip: React.FC<UserBasicInfo> = ({ name, imgSrc }) => {
  return (
    <div className="hidden group-hover:block absolute z-50 bottom-full left-0 px-2 py-1 rounded-lg w-80 flex flex-row items-start justify-start tracking-[normal]">
      <section className="h-[204px] flex-1 rounded-lg bg-slackcom-nero shadow-[0px_0px_0px_1px_rgba(29,_28,_29,_0.13),_0px_4px_12px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-start text-left text-mini text-appslackcom-thunder font-appslackcom-lato-bold-15">
        <div className="self-stretch flex-1 flex flex-row items-end justify-start pt-4 px-4 pb-[21px] box-border gap-[12px] min-h-[36px]">
          <div className="self-stretch bg-appslackcom-thunder-13 overflow-hidden flex flex-row items-start justify-start">
            <Image
              className="h-[72px] w-[72px] relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src={imgSrc}
              height={72}
              width={72}
            />
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[23.399999999999636px]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[22px] font-black inline-block ">
                {name}
              </div>
              <div className="h-[21px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <Image
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/away.svg"
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[17px] px-4 pb-4 gap-[12px] border-t-[1px] border-solid border-appslackcom-thunder-13">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[135px] pl-0">
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
              <div className="relative leading-[22px] inline-block min-w-[125px] whitespace-nowrap">
                3:57 PM local time
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-px gap-[1px] text-center text-smi">
            <div className="w-[138px] rounded bg-slackcom-nero box-border flex flex-row items-center justify-center pt-[2.2999999999992724px] px-[11px] pb-[3.2000000000007276px] min-w-[54px] border-[1px] border-solid border-appslackcom-thunder-30">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-end max-w-[140px]">
                <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-[19.5px] box-border max-w-[114px]">
                  <div className="h-[20.5px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] box-border">
                    <Image
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/message-icon.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-1">
                    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                      <b className="self-stretch relative inline-block min-w-[51px]">
                        Message
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex flex-col items-start justify-start py-px pr-px pl-[9px] box-border min-w-[64px]">
                <div className="self-stretch rounded bg-slackcom-nero box-border flex flex-row items-center justify-center pt-[2.2999999999992724px] px-[11px] pb-[3.2000000000007276px] min-w-[54px] border-[1px] border-solid border-appslackcom-thunder-30">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-end max-w-[140px]">
                    <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[14.599999999999994px] box-border min-w-[66.16000366210938px]">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center">
                        <div className="h-[20.5px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] box-border">
                          <img
                            className="w-5 h-5 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/svg-3.svg"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-1">
                          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                            <b className="self-stretch relative inline-block min-w-[43px]">
                              Huddle
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start py-0 pr-0 pl-[15.399999999999975px] box-border min-w-[17px]">
                      <div className="flex flex-row items-center justify-start pt-[2.2000000000007276px] pb-[2.2999999999992724px] pr-0 pl-1">
                        <div className="h-4 flex flex-col items-center justify-start pt-[1.6000000000003638px] px-0 pb-[1.3999999999996362px] box-border">
                          <img
                            className="w-[13px] h-[13px] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/svg-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolTip;

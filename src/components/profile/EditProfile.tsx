import { EditProfileFormProps } from "@/types/types";
import type { NextPage } from "next";
import Image from "next/image";

const EditProfileForm: NextPage<EditProfileFormProps> = ({ onCancel }) => {
  return (
    <div className="w-[700px] rounded-lg bg-slackcom-nero max-w-[700px] overflow-hidden flex flex-col items-start justify-start max-h-[930px] tracking-[normal] text-left text-[22px] text-appslackcom-thunder font-lato mq675:max-w-full mq450:max-w-full mq650:max-w-full">
      <div className="self-stretch rounded-t-lg rounded-b-none bg-slackcom-nero overflow-hidden flex flex-row items-center justify-center py-0 pr-[0.6000000000000227px] pl-[0.5999999999999943px] box-border min-h-[70px] max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start py-5 px-[25px] box-border min-h-[70px] max-w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[0.5px]">
              <div className="relative leading-[30px] font-black inline-block max-w-[162px] mq450:text-lg mq450:leading-[24px]">
                Edit your profile
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch bg-slackcom-nero overflow-hidden flex flex-col items-start justify-start pt-[0.5px] px-7 pb-[90.5px] box-border gap-[6.5px] min-h-[50px] max-w-full text-left text-mini text-appslackcom-thunder font-appslackcom-lato-bold-15 mq675:pt-5 mq675:pb-[59px] mq675:box-border">
        <div className="self-stretch flex flex-row items-start justify-center gap-[32px] max-w-full mq675:gap-[32px_16px] mq650:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[273px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
                  <b className="relative leading-[22px] inline-block min-w-[65px] max-w-[420px] mq450:max-w-full">
                    Full name
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-5 box-border max-w-full">
                  <div className="flex-1 rounded bg-slackcom-nero box-border flex flex-row items-start justify-center pt-2.5 px-3 pb-3 max-w-full border-[1px] border-solid border-appslackcom-thunder-30">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 overflow-hidden flex flex-col items-start justify-start font-appslackcom-lato-bold-15 text-lg text-appslackcom-thunder min-w-[236px] max-w-full"
                      placeholder="Nishant Dabre"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
                  <b className="relative leading-[22px] inline-block min-w-[90px] max-w-[420px] mq450:max-w-full">
                    Display name
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-smi text-appslackcom-scorpion">
                  <div className="self-stretch rounded bg-slackcom-nero box-border flex flex-row items-start justify-center pt-2.5 px-3 pb-3 max-w-full border-[1px] border-solid border-appslackcom-thunder-30">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 overflow-hidden flex flex-col items-start justify-start font-appslackcom-lato-bold-15 text-lg text-appslackcom-thunder min-w-[236px] max-w-full"
                      placeholder="Nishant Dabre"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0">
                    <div className="relative leading-[18px] inline-block max-w-[420px] mq450:max-w-full">
                      <p className="m-0">
                        This could be your first name or a nickname — the name
                        you’d like people
                      </p>
                      <p className="m-0">to use to refer to you in Slack.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-left text-mini text-appslackcom-thunder font-appslackcom-lato-bold-15">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
                <b className="relative leading-[22px] inline-block min-w-[31px] max-w-[420px] mq450:max-w-full">
                  Title
                </b>
              </div>
              <div className="w-[237px] flex flex-col items-start justify-start gap-[4px] text-smi text-appslackcom-scorpion">
                <div className="self-stretch rounded bg-slackcom-nero flex flex-row items-start justify-center pt-2.5 px-3 pb-3 border-[1px] border-solid border-appslackcom-thunder-30">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 overflow-hidden flex flex-col items-start justify-start font-appslackcom-lato-bold-15 text-lg text-appslackcom-scorpion min-w-[127px]"
                    placeholder="Title"
                    type="text"
                  />
                </div>
                <div className="relative leading-[18px]">
                  Let people know what you do at Company.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[344px] w-48 flex flex-col items-center justify-start pt-0 px-0 pb-[74px] box-border gap-[9px] min-w-[192px] mq650:flex-1">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2">
                <b className="relative leading-[22px] inline-block min-w-[88px] max-w-[192px]">
                  Profile photo
                </b>
              </div>
              <Image
                className="w-48 h-48 relative rounded overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/no-photo-c.png"
                height={192}
                width={192}
              />
            </div>
            <button className="cursor-pointer pt-[7.5px] px-[49px] pb-[8.5px] bg-slackcom-nero rounded box-border flex flex-row items-center justify-center min-w-[78px] whitespace-nowrap border-[1px] border-solid border-appslackcom-thunder-30 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
              <b className="w-[92px] relative text-mini flex font-appslackcom-lato-bold-15 text-appslackcom-thunder text-center items-center justify-center min-w-[92px]">
                Upload photo
              </b>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32.5px] max-w-full mq675:gap-[16px_32.5px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
            <b className="relative leading-[22px] inline-block min-w-[69px] max-w-[644px] mq675:max-w-full">
              Time zone
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-lg">
              <div className="self-stretch rounded flex flex-row items-start justify-start min-h-[28px] max-w-full">
                <div className="flex-1 rounded bg-slackcom-nero box-border overflow-hidden flex flex-row items-start justify-start max-w-full border-[1px] border-solid border-appslackcom-thunder-30">
                  <div className="flex-1 rounded flex flex-row items-start justify-start pt-[8.300000000000182px] px-3 pb-[8.699999999999818px] box-border relative max-w-full z-[1]">
                    <div className="relative leading-[27px] whitespace-nowrap">
                      (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                    </div>
                    {/* <Image
                      className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[12px] overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/svg.svg"
                    /> */}
                  </div>
                </div>
              </div>
              <div className="relative text-smi leading-[18px] text-appslackcom-scorpion inline-block max-w-[644px] mq675:max-w-full">
                <p className="m-0">
                  Your current time zone. Used to send summary and notification
                  emails, for times in your activity feeds and
                </p>
                <p className="m-0">for reminders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch rounded-t-none rounded-b-lg bg-slackcom-nero overflow-hidden flex flex-row items-center justify-end py-6 px-7">
        <div className="flex flex-row items-center justify-start py-0 pr-0 pl-px gap-[13px]">
          <button
            className="cursor-pointer pt-[7.5px] px-[15px] pb-[8.5px] bg-slackcom-nero w-[78.2px] rounded box-border flex flex-row items-end justify-center min-w-[78px] border-[1px] border-solid border-appslackcom-thunder-30 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray"
            onClick={onCancel}
          >
            <b className="w-[46px] relative text-mini flex font-appslackcom-lato-bold-15 text-appslackcom-thunder text-center items-center justify-center min-w-[46px] max-h-[33px]">
              Cancel
            </b>
          </button>
          <button className="cursor-pointer [border:none] pt-[8.5px] px-3 pb-[9.5px] bg-appslackcom-tropical-rain-forest rounded flex flex-row items-end justify-center box-border min-w-[80px] whitespace-nowrap hover:bg-seagreen">
            <b className="w-[90px] relative text-mini flex font-appslackcom-lato-bold-15 text-slackcom-nero text-center items-center justify-center min-w-[90px] max-h-[35px]">
              Save changes
            </b>
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditProfileForm;

import Modal from "@/common/Model";
import { useState } from "react";

const DifferentPricing = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);

  const closeModal = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <div className=" top-[148px] left-[calc(50%_-_632.5px)] flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border gap-[144px] max-w-[1225px] z-[1] text-center text-41xl text-pumblecom-shark font-pumblecom-roboto-flex-medium-2645 mq1225:max-w-full font-lato w-[942px]">
        <div className="w-full flex flex-col items-center justify-start pt-0 px-5 pb-10 box-border gap-[24px] max-w-[1225px] mq1225:max-w-full">
          <h1 className="m-0 w-full relative text-21xl tracking-[-0.5px] leading-[72px] font-bold font-inherit inline-block max-w-[1195px] mq750:text-29xl mq750:leading-[58px] mq450:text-17xl mq450:leading-[43px] mq1225:max-w-full">
            Pricing plans for businesses of all sizes
          </h1>
          <div className="w-[1033px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base text-pumblecom-waterloo">
            <div className="w-[499px] relative leading-[25.6px] flex items-center justify-center max-w-[1195px] mq1225:max-w-full">
              Start using Genie Chat for free, and upgrade when you need more
              features.
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-start pt-24 px-0 pb-12 box-border max-w-[1225px] text-5xl mq1225:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-[1225px] mq1225:max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-[1225px] mq1225:max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-14 box-border max-w-full">
                <div className="h-[1079.3px] flex-1 rounded-xl [background:linear-gradient(rgba(241,_236,_249,_0.05),_rgba(241,_236,_249,_0.05)),_#fff] box-border flex flex-row items-start justify-start pt-0.5 px-[17px] pb-[1.1px] max-w-[1185px] border-[2px] border-solid border-pumblecom-french-gray mq1225:max-w-full">
                  <div className="w-[279.2px] rounded-[17.78px] flex flex-row items-start justify-start min-h-[450px] mq750:hidden">
                    <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-[494.4px] box-border gap-[16px] min-h-[1px]">
                      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[29.6px] pr-[22px] pl-5 relative">
                        <h2 className="m-0 w-14 relative text-inherit leading-[29px] uppercase font-medium font-inherit flex items-center justify-center min-w-[56px] max-w-[279.2300109863281px] mq450:text-lgi mq450:leading-[23px]">
                          Free
                        </h2>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[55px] pl-[54.6px] text-pumblecom-waterloo">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[24.8px]">
                          <div className="w-[142.1px] h-[28.8px] flex flex-row items-start justify-start py-0 px-[62px] box-border">
                            <h2 className="m-0 self-stretch flex-1 relative text-inherit font-medium font-inherit flex items-center shrink-0 [debug_commit:f6aba90] mq450:text-lgi mq450:leading-[23px]">
                              <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a572ff,_#673ab7)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                $
                              </span>
                              <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a572ff,_#673ab7)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`0`}</span>
                            </h2>
                          </div>
                          <div className="self-stretch flex flex-col items-end justify-start gap-[16px] shrink-0 [debug_commit:f6aba90] text-base">
                            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[60.4px] pl-[60px]">
                              <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[25.9px] box-border max-w-[225px]">
                                <div className="w-[49px] relative leading-[26px] lowercase flex items-center justify-center min-w-[49px]">
                                  forever
                                </div>
                              </div>
                            </div>
                            <button className="cursor-pointer pt-[9.7px] px-6 pb-2.5 bg-pumblecom-royal-purple self-stretch rounded-3xl flex flex-row items-end justify-start gap-[15px] whitespace-nowrap border-[2px] border-solid border-pumblecom-royal-purple hover:bg-mediumslateblue hover:box-border hover:border-[2px] hover:border-solid hover:border-mediumslateblue">
                              <a
                                className="w-[79px] relative text-base leading-[25.6px] font-pumblecom-roboto-flex-medium-2645 text-clickupcom-nero text-center flex items-center justify-center shrink-0 [text-decoration:none] min-w-[79px]"
                                href="/auth/signup"
                                target="_blank"
                              >
                                Get started
                              </a>
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                                alt=""
                                src="/arrowrightcirclewhitesvg@2x.png"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start gap-[16px] text-left text-sm text-pumblecom-mid-gray1">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[34.9px]">
                          <div className="h-0.5 flex-1 relative box-border border-t-[2px] border-solid border-pumblecom-tower-gray-30" />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[24.8px] pl-[25px]">
                          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px]">
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/checksvg.svg"
                                />
                              </div>
                              <div className="relative leading-[28px] inline-block min-w-[96.9px]">
                                Unlimited users
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/checksvg.svg"
                                />
                              </div>
                              <div className="relative leading-[28px]">
                                Unlimited message history
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <img
                                className="h-[23.2px] w-6 relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/checksvg.svg"
                              />
                              <div className="relative leading-[28px]">
                                Voice and video messages
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.1px] px-1.5 pb-[5.1px] gap-[9.4px]">
                              <img
                                className="h-[23.2px] w-6 relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/checksvg.svg"
                              />
                              <div className="relative leading-[28px]">
                                1:1 meetings (voice and video)
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/checksvg.svg"
                                />
                              </div>
                              <div className="relative leading-[28px] inline-block min-w-[110.9px]">
                                Import from Slack
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/checksvg.svg"
                                />
                              </div>
                              <div className="relative leading-[28px]">
                                10GB storage per workspace
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/checksvg.svg"
                                />
                              </div>
                              <div className="relative leading-[28px] inline-block min-w-[91px]">
                                Export content
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-end justify-start pt-[2.2px] px-1.5 pb-[5px] gap-[9.4px]">
                              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                                <img
                                  className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/checksvg.svg"
                                />
                              </div>
                              <div className="relative leading-[28px] inline-block min-w-[121.8px]">
                                Up to 3 integrations
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[650px] flex flex-row items-start justify-start pt-10 px-0 pb-4 box-border min-w-[1.940000057220459px] mq750:hidden">
                    <div className="self-stretch w-[1.9px] relative bg-pumblecom-white-lilac1 box-border border-t-[2px] border-solid border-pumblecom-tower-gray-30" />
                  </div>
                  <div className="w-[279.2px] rounded-[17.78px] flex flex-row items-start justify-start min-h-[450px] mq750:hidden">
                    <div className="relative left-[0px] rounded-[17.78px] w-[279.2px] flex flex-row items-start justify-start min-h-[450px]">
                      <div className="flex-1 flex flex-col items-end justify-start pt-6 px-0 pb-[558.5px] box-border gap-[16px] min-h-[1px]">
                        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
                          <h2 className="m-0 w-[47px] relative text-inherit leading-[29px] uppercase font-medium font-inherit flex items-center justify-center min-w-[47px] max-w-[279.2300109863281px] mq450:text-lgi mq450:leading-[23px]">
                            Pro
                          </h2>
                        </div>
                        <div className="w-[261px] h-[67.2px] flex flex-row items-start justify-center py-0 px-5 box-border text-[transparent]">
                          <div className="self-stretch mr-[25px] flex flex-row items-end justify-start">
                            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.2px] ">
                              <div className="relative leading-[50px] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a572ff,_#673ab7)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[33.4px] shrink-0 [debug_commit:f6aba90] mq450:text-lgi mq450:leading-[23px]">
                                $2.49
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[27.1px] pl-[27px] text-base text-pumblecom-waterloo">
                          <div className="flex-1 flex flex-col items-start justify-start py-0 px-[7px] box-border max-w-[225px]">
                            <div className="relative leading-[25.6px] lowercase">
                              per user/month billed annually
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-3">
                              <div className="w-[185px] relative leading-[25.6px] lowercase flex items-center justify-center">
                                (or $2.99 if billed monthly)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[63.7px] pl-16">
                          <button
                            className="cursor-pointer pt-[9.7px] pb-2.5 pr-[22px] pl-[26px] bg-pumblecom-royal-purple flex-1 rounded-3xl flex flex-row items-end justify-start gap-[14.8px] border-[2px] border-solid border-pumblecom-royal-purple hover:bg-mediumslateblue hover:box-border hover:border-[2px] hover:border-solid hover:border-mediumslateblue"
                            onClick={() => setIsModelOpen(true)}
                          >
                            <div className="w-[61px] relative text-base leading-[25.6px] font-pumblecom-roboto-flex-medium-2645 text-clickupcom-nero text-center flex items-center justify-center shrink-0 [text-decoration:none] min-w-[61px]">
                              Upgrade
                            </div>
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/arrowrightcirclewhitesvg-1@2x.png"
                            />
                          </button>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[34.9px]">
                          <div className="h-0.5 flex-1 relative box-border border-t-[2px] border-solid border-pumblecom-tower-gray-30" />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9.1px] pl-[9px] text-left text-sm text-pumblecom-royal-purple">
                          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-2 pb-4">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[23px] pl-[39px] text-base text-pumblecom-mid-gray">
                                <b className="relative leading-[25.6px]">
                                  Everything in FREE, and:
                                </b>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    Group meetings (voice and video)
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[116px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <img
                                    className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src="/checksvg.svg"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] inline-block [text-decoration:none] min-w-[93px]">
                                    Screen sharing
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[68px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    Customizable sections
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[71px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    10GB storage per seat
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    Up to 10 integrations
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    AI send Invite
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    AI reminder set
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                <div className="flex flex-col items-start justify-start p-1.5">
                                  <div className="overflow-hidden flex flex-col items-start justify-start">
                                    <div className="overflow-hidden flex flex-col items-center justify-center">
                                      <img
                                        className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src="/checksvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                    Sprint from chat
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[279.2px] rounded-[17.78px] flex flex-row items-start justify-start min-h-[450px] mq750:hidden mt-[-45px]">
                    <div className="h-[1236.5px] flex-1 rounded-[17.78px] bg-pumblecom-white-lilac box-border flex flex-col items-start justify-start pt-[2.3px] px-0.5 pb-[57.5px] relative min-h-[595.125px] max-w-full border-[2px] border-solid border-pumblecom-french-gray ml-[45px] mt-[-4px]">
                      <div className="w-[230px] h-[47.9px] !m-[0] absolute top-[-42.7px] left-[20.7px] rounded-3xs bg-pumblecom-japanese-laurel flex flex-row items-start justify-start py-0 px-0 box-border whitespace-nowrap">
                        <h3 className="mt-[-1px] m-0 flex-1 relative leading-[50px] font-bold font-inherit shrink-0 [debug_commit:f6aba90] text-[25px]">
                          MOST POPULAR
                        </h3>
                      </div>
                      <div className="w-full !m-[0] top-[2.3px] right-[2px] left-[2px] rounded-[17.78px]  flex flex-col items-end justify-start pt-[67.1px] pb-[589.9px] pr-[24.5px] pl-[21.7px] box-border gap-[44.8px] min-h-[1.3224999904632568px] z-[1] text-7xl-4 text-pumblecom-royal-purple">
                        <div className="flex flex-row items-start justify-end py-0 px-[61px]">
                          <div className="w-[124px] relative leading-[29px] uppercase font-medium flex items-center justify-center min-w-[124px] mq450:text-2xl mq450:leading-[23px] left-[15px]">
                            Business
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-[transparent]">
                          <div className="self-stretch h-[41.2px] flex flex-row items-start justify-center pt-0 pb-[12.4px] pr-5 pl-[29px] box-border">
                            <div className="self-stretch w-full flex flex-row items-start justify-start gap-[25px]">
                              <div className="flex-1 relative mt-[-30px] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#a572ff,_#673ab7)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[38px] mq450:text-2xl mq450:leading-[23px]">
                                $3.99
                              </div>
                            </div>
                          </div>
                          <div className="self-center flex flex-row items-start justify-start py-0 pr-0 pl-[4.3px] text-mini-7 text-pumblecom-waterloo">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16.6px]">
                              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[27.1px] pl-[27px] text-base text-pumblecom-waterloo">
                                <div className="flex-1 flex flex-col items-start justify-start py-0 px-[7px] box-border max-w-[225px]">
                                  <div className="relative leading-[25.6px] lowercase">
                                    per user/month billed annually
                                  </div>
                                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-3">
                                    <div className="w-[185px] relative leading-[25.6px] lowercase flex items-center justify-center">
                                      (or $4.99 if billed monthly)
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-end justify-start gap-[13.5px]">
                                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[52px]">
                                  <button
                                    className="cursor-pointer pt-[9.7px] pb-2.5 pr-[22px] pl-[26px] bg-pumblecom-royal-purple flex-1 rounded-3xl flex flex-row items-end justify-start gap-[14.8px] border-[2px] border-solid border-pumblecom-royal-purple hover:bg-mediumslateblue hover:box-border hover:border-[2px] hover:border-solid hover:border-mediumslateblue"
                                    onClick={() => setIsModelOpen(true)}
                                  >
                                    <div className="w-[104.3px] flex flex-row items-end justify-start py-0 px-0 box-border gap-[14.3px]">
                                      <div className="flex-1 relative text-mid-6 leading-[26px] font-pumblecom-roboto-flex-medium-2645 text-clickupcom-nero text-center inline-block [text-decoration:none] min-w-[67px]">
                                        Upgrade
                                      </div>
                                      <div className="overflow-hidden flex flex-row items-start justify-start">
                                        <div className="overflow-hidden flex flex-col items-center justify-center">
                                          <img
                                            className="w-[23px] h-[23px] relative overflow-hidden shrink-0 object-cover"
                                            alt=""
                                            src="/arrowrightcirclewhitesvg-2@2x.png"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[34.4px]">
                                  <div className="h-[1.9px] flex-1 relative box-border border-t-[2px] border-solid border-pumblecom-tower-gray-30" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-center flex flex-row items-start justify-end py-0 pr-[9.1px] pl-[9px] text-left text-sm text-pumblecom-royal-purple">
                            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-2 pb-4">
                              <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[23px] pl-[39px] text-base text-pumblecom-mid-gray">
                                  <b className="relative leading-[25.6px]">
                                    Everything in FREE, and:
                                  </b>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      Group meetings (voice and video)
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[116px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <img
                                      className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                      loading="lazy"
                                      alt=""
                                      src="/checksvg.svg"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] inline-block [text-decoration:none] min-w-[93px]">
                                      Screen sharing
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[68px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      Customizable sections
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[71px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      10GB storage per seat
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      Up to 10 integrations
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      Up to 10 integrations
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      AI send Invite
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      AI reminder set
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[79px] pl-0">
                                  <div className="flex flex-col items-start justify-start p-1.5">
                                    <div className="overflow-hidden flex flex-col items-start justify-start">
                                      <div className="overflow-hidden flex flex-col items-center justify-center">
                                        <img
                                          className="w-6 h-[23.2px] relative overflow-hidden shrink-0"
                                          loading="lazy"
                                          alt=""
                                          src="/checksvg.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="relative leading-[28px] text-[inherit] [text-decoration:none]">
                                      Sprint from chat
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal showModal={isModalOpen} onClose={closeModal}>
        <div className="text-center">
          If you want to subscribe, please contact us at:
          <a href="mailto:nishantdabre44@gmail.com" className="text-blue-500">
            nishantdabre44@gmail.com
          </a>
        </div>
      </Modal>
    </>
  );
};

export default DifferentPricing;

import Item from "./Item";
import LeafBranch from "./LeafBranch";

const Services = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[27px] max-w-full text-left text-xl text-clickupcom-nero font-clickupcom-inter-black-14">
      <div className="self-stretch grid flex-row items-start justify-start gap-[31.7px] max-w-full grid-cols-[repeat(3,_minmax(265px,_1fr))] mq800:gap-[31.7px_16px] mq800:grid-cols-[minmax(265px,_1fr)] mq1150:justify-center mq1150:grid-cols-[repeat(2,_minmax(265px,_459px))]">
        <div className="h-[397px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex-1 rounded-xl [background:linear-gradient(-7.18deg,_#5037e7_6.96%,_#eb00ff)] overflow-hidden flex flex-col items-start justify-end relative max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[31px] box-border max-w-full">
              <img
                className="flex-1 max-w-full h-[200px]"
                loading="lazy"
                alt=""
                src="/ai.svg"
              />
            </div>
            <div className="w-full !m-[0] absolute top-[0px] left-[6px] flex flex-col items-start justify-start py-7 px-[31px] box-border gap-[9px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative leading-[28px] font-extrabold inline-block max-w-[291.3299865722656px] mq450:text-base mq450:leading-[22px]">
                  AI-powered productivity
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[26.3px] pl-0 text-base">
                <div className="relative leading-[24px] font-medium inline-block max-w-[291.3299865722656px]">
                  <p className="m-0">Get work done faster with the only</p>
                  <p className="m-0">AI-powered assistant tailored to</p>
                  <p className="m-0">your role.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl [background:linear-gradient(-7.18deg,_#6731ec_1.65%,_#44cfff)] overflow-hidden flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-7 px-[31px] gap-[9px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-extrabold inline-block max-w-[291.3299865722656px] mq450:text-base mq450:leading-[22px]">
                View work your way
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-[29.3px] pl-0 text-base">
              <div className="relative leading-[24px] font-medium inline-block max-w-[291.3299865722656px]">
                <p className="m-0">Instantly switch between 15 views</p>
                <p className="m-0">including list, board, gantt, and</p>
                <p className="m-0">more.</p>
              </div>
            </div>
          </div>
          <div className="w-[363.3px] flex flex-col items-start justify-end pt-[8.7px] pb-0 pr-0 pl-2.5 box-border min-h-[220.3000030517578px] max-w-[103%] shrink-0">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <img
                className="h-[220.3px] flex-1 relative rounded-t-none rounded-br-xl rounded-bl-none max-w-[353.3299865722656px] overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/viewworkyourwaypng@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="rounded-xl [background:linear-gradient(171.01deg,_#6731ec_1.65%,_#44cfff)] overflow-hidden flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border gap-[28px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <div className="relative leading-[28px] font-extrabold inline-block max-w-[291.3399963378906px] mq450:text-base mq450:leading-[22px]">
                Create Sprint from chat&apos;s
              </div>
              <div className="relative text-base leading-[24px] font-medium inline-block max-w-[291.3399963378906px]">
                <p className="m-0">Configuring GenieChat for different</p>
                <p className="m-0">types of work is as easy as flipping a</p>
                <p className="m-0">switch.</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] text-base">
            <Item svg="/time-tracking.svg" timeTracking="Time Tracking" />
            <button className="cursor-pointer [border:none] py-5 pr-[33px] pl-[43px] bg-clickupcom-nero self-stretch shadow-[0px_2px_10px_rgba(37,_47,_104,_0.1)] flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap mq450:pl-5 mq450:box-border">
              <img
                className="h-[31px] w-[31px] relative overflow-hidden shrink-0 min-h-[31px]"
                alt=""
                src="/sprint.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[150px]">
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative text-base leading-[25px] font-medium font-clickupcom-inter-black-14 text-clickupcom-dodger-blue text-left inline-block min-w-[55px] shrink-0 [debug_commit:f6aba90]">
                      Sprints
                    </div>
                  </div>
                  <div className="h-[27px] flex-1 flex flex-row items-start justify-end py-0 px-0 box-border min-w-[59px] shrink-0 [debug_commit:f6aba90]">
                    <img
                      className="h-7 w-[60px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/switch-on.svg"
                    />
                  </div>
                </div>
              </div>
            </button>
            <Item svg="/custom-field.svg" timeTracking="Custom Fields" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-4xl mq1150:flex-wrap">
        <div className="flex-1 rounded-xl [background:linear-gradient(-16.69deg,_#5037e7_12.36%,_#eb00ff)] overflow-hidden flex flex-row items-start justify-between py-[35px] px-10 box-border relative min-h-[389px] max-w-full gap-[20px] shrink-0 mq800:flex-wrap mq800:min-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border">
          <img
            className="h-full w-[218.1px] absolute !m-[0] top-[0px] bottom-[0px] left-[193px] max-h-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
          <LeafBranch
            playsWellWithOthers="Plays well with others"
            easilyIntegratesWithThe="Easily integrates with the"
            toolsYouAlreadyUse="tools you already use."
            clickupIntegrationssvg="/clickupintegrationssvg@2x.png"
          />
          <LeafBranch
            playsWellWithOthers="Replaces them entirely"
            easilyIntegratesWithThe="Eliminate app sprawl and"
            toolsYouAlreadyUse="reduce software spend."
            clickupIntegrationssvg="/clickupintegrationreplacessvg@2x.png"
            propHeight="283.4px"
          />
        </div>
        <div className="w-[353.3px] rounded-xl [background:blueviolet] overflow-hidden shrink-0 flex flex-col items-start justify-between min-w-[353.3px] min-h-[389px] max-w-full text-xl mq800:min-w-full mq1150:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start py-7 px-[31px] gap-[9px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[28px] font-extrabold inline-block max-w-[291.3399963378906px] mq450:text-base mq450:leading-[22px]">
                Find everything
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-[13.3px] pl-0 text-base ">
              <div>
                <img
                  className="h-full w-full flex-1 relative rounded-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/search-new.svg"
                />
              </div>
              <div className="relative leading-[24px] font-medium inline-block max-w-[291.3399963378906px]">
                <p className="m-0">
                  Find everything Look for an important file,
                </p>
                <p className="m-0">
                  a conversation from years ago or a comment someone made
                  yesterday,
                </p>
                <p className="m-0">
                  all in an instant. Focus on work and recall info when and
                  where it&apos;s needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import Image from "next/image";

const Slackbot = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-12 pb-[7.9px] box-border gap-[7.3px] tracking-[normal] text-left text-mid-6 text-appslackcom-thunder font-appslackcom-lato-regular-176">
      <div className="relative text-[28px] leading-[34px] font-black mq450:text-3xl mq450:leading-[27px]">
        Hello there! I&apos;m your AI Chatbot ready to assist!
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq725:gap-[16px]">
        <div className="flex flex-col items-start justify-start pt-[4.7px] px-0 pb-0">
          <div className="h-12 bg-appslackcom-thunder-13 overflow-hidden shrink-0 flex flex-col items-start justify-start rounded">
            <Image
              className="w-12 h-12 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/chat-bot.png"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-end justify-start max-w-full">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <div className="relative leading-[26.4px]">
              Welcome! I&apos;m here to assist you.
            </div>
            <div className="flex flex-row items-end justify-start">
              <div className="relative leading-[20px]">
                Need a calendar invite created? Or perhaps a reminder set up?
                Just let me know how I can assist you today!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slackbot;

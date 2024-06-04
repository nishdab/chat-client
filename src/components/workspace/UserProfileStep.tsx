import Image from "next/image";
import React from "react";

const UserProfileStep: React.FC = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8 font-lato">
      <h1 className="m-0 w-full relative font-bold flex items-center max-w-[calc(100% - 3rem)] text-4xl">
        What&apos;s your name ?
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-8">
        <b className="w-full relative inline-block max-w-[calc(100% - 3rem)] text-lg md:text-xl text-grey-600">
          Adding your name and profile photo helps your teammates to recognise
          and connect with you more easily.
        </b>
        <div className="self-stretch flex flex-row items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-4 md:gap-8">
          <div className="flex flex-row items-center relative w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] box max-w-[calc(100% - 3rem)]">
            <input
              className="outline-none bg-transparent h-12 w-full box-border opacity-50 border-2 border-solid border-darkgray relative font-lato rounded pl-3"
              type="text"
              placeholder="e.g. Your Name"
              // onChange={handleInputChange}
            />
          </div>
        </div>

        {/* <div className="self-stretch flex flex-col items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-2 md:gap-2">
          <b className="w-full relative inline-block max-w-[calc(100% - 3rem)] text-lg md:text-xl">
            Your profile photo (optional)
          </b>
          <b className="w-full relative inline-block text-lg md:text-xl text-grey-600">
            Help your teammates to know that they&apos;s re talking to the right
            person.
          </b>
          <div className="self-stretch flex flex-col items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-4 md:gap-4">
            <Image
              height={128}
              width={128}
              src="/no-photo-a.svg"
              className="h-32 w-32 rounded"
              alt="No photo"
            />
          </div>

          <div className="self-stretch flex flex-col items-start justify-between pt-2 md:pt-4 pb-0 pr-0 pl-4 md:pl-0 gap-4 md:gap-4">
            <button
              className={`pt-3 px-4 pb-3 rounded w-full md:w-auto flex items-center justify-center relative 0`}
              // onClick={handleNextStep}
            >
              <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0" />
              <div className="relative inline-block min-w-24 text-center font-lato">
                Upload photo
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfileStep;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/common/Loader";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { createChannel } from "@/slices/channelSlice";
import { useRouter } from "next/router";

interface Props {
  closeModal: () => void;
}

const CreateNewChannel: React.FC<Props> = ({ closeModal }) => {
  const router = useRouter();
  const { dispatch } = useAppStore();
  const { workSpaceId } = router.query;
  const { createChannelStatus, activeChannel } = useAppSelector(
    (state) => state.channel
  );

  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [channelName, setChannelName] = useState<string>("");
  const [channelDescription, setChannelDescription] = useState<string>("");

  useEffect(() => {
    // If the channel has been successfully created and activeChannel is set
    if (createChannelStatus === "succeeded" && activeChannel) {
      // Redirect to the newly created channel
      router.push(`/workspace/${workSpaceId}/${activeChannel.id}`);
    }
  }, [createChannelStatus, activeChannel, workSpaceId, router]);

  const handleTogglePrivate = () => {
    setIsPrivate((prevIsPrivate) => !prevIsPrivate);
  };

  const handleChannelNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChannelName(event.target.value);
  };

  const handleChannelDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChannelDescription(event.target.value);
  };

  const handleCreateChannel = async () => {
    const channel = {
      name: channelName,
      description: channelDescription,
      isPrivate,
      channelType: "GP",
      organizationId: Array.isArray(workSpaceId)
        ? workSpaceId.join("/")
        : workSpaceId || "",
    };

    await dispatch(createChannel(channel));
    closeModal();
  };

  return (
    <div className="w-full md:w-[677.7px] rounded-[20px] bg-slack-brand-ffffff overflow-hidden flex flex-col items-start justify-start md:pr-[36.99999999999977px] md:pl-[37px] box-border gap-[58px_0px] tracking-[normal] text-left text-[28px] text-black font-larsseit md:gap-[29px_0px]">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative gap-[0px_356px]">
        <h3 className="text-inherit font-bold font-lato flex items-center md:text-[22px]">
          Create a channel
        </h3>
        <div className="text-lg font-semibold font-lato text-slack-ui-616061 flex items-center">
          Channels are where your team communicates. They’re best when organized
          around a topic - #marketing, for example
        </div>
      </div>
      <div className="w-full md:w-[554px] flex flex-col items-start justify-start gap-[11px_0px] max-w-full text-left text-lg text-black font-lato">
        <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[0px_8px] max-w-full">
          <div className="relative font-semibold mix-blend-normal">Name</div>
          <div className="flex-1 relative font-semibold text-peru inline-block mix-blend-normal text-slack-ui-616061">
            (Don’t forget to name your channel)
          </div>
        </div>
        <div className="self-stretch rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  flex flex-row items-start justify-start pt-[11px] md:px-4 pb-2.5 max-w-full z-[1] rounded ring-2 ring-grey-300">
          <input
            className="w-full md:w-48 [border:none] [outline:none] font-mixed text-xl bg-[transparent] h-[23px] relative whitespace-pre-wrap text-left flex items-center mix-blend-normal p-0 md:text-base"
            placeholder="#  e.g. plant-budget"
            type="text"
            value={channelName}
            onChange={handleChannelNameChange}
          />
          <div className="h-11 w-full md:w-[554px] relative rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full border-[1px] ring-2 ring-grey-300" />
        </div>
      </div>
      <div className="w-full md:w-[554px] flex flex-col items-start justify-start gap-[12px_0px] max-w-full text-left text-lg text-black font-lato">
        <div className="flex flex-row items-start justify-start gap-[0px_12px]">
          <div className="relative font-semibold mix-blend-normal">
            Description
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-mid text-slack-ui-616061">
            <div className="relative font-semibold">(optional)</div>
          </div>
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-11 relative rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[250px] rounded ring-2 ring-grey-300"
          type="text"
          value={channelDescription}
          onChange={handleChannelDescriptionChange}
        />
      </div>
      <section className="w-full md:w-[544px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg text-black font-lato md:flex-wrap">
        <div className="w-full md:w-[357px] flex flex-col items-start justify-start gap-[58px_0px] max-w-full md:gap-[29px_0px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-semibold mix-blend-normal">
              Make private
            </div>
            <div className="self-stretch h-[49px] relative text-mid font-semibold text-slack-ui-616061 flex items-center shrink-0">
              When a channel is set to private, it can only be viewed or joined
              by invitation
            </div>
          </div>

          <button
            className="pt-3 px-4 pb-3 rounded flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white cursor-pointer "
            onClick={handleCreateChannel}
          >
            <div className="relative inline-block min-w-24 text-center font-lato">
              {createChannelStatus === "loading" ? (
                <Loader />
              ) : (
                "Create Channel"
              )}
            </div>
          </button>
        </div>
        <div className="w-full md:w-[90px] flex flex-col items-start justify-start pt-3 md:px-0 pb-0 box-border">
          <Image
            className="w-[70px] h-[70px] cursor-pointer"
            src={isPrivate ? "/toggle-on.svg" : "/toggle-off.svg"}
            alt=""
            onClick={handleTogglePrivate}
            height={70}
            width={70}
          />
        </div>
      </section>
    </div>
  );
};

export default CreateNewChannel;

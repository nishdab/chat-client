import { useRouter } from "next/router";
import MainLayout from "../layout";
import ChannelComponent from "../../components/channel/ChannelComponent";
import channels from "./channels.json";
import { useEffect, useState } from "react";
import NoDataFound from "@/components/exception/NoDataFound";
import { Channel } from "@/types/types";

const ChannelPage = () => {
  const router = useRouter();
  const { channelId } = router.query;

  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  // useEffect(() => {
  //   if (channelId) {
  //     const foundChannel = channels.find(
  //       (channel: Channel) => channel.id === Number(channelId)
  //     );

  //     if (foundChannel) {
  //       setSelectedChannel(foundChannel);
  //     } else {
  //       console.error(`Channel with ID ${channelId} not found`);
  //     }
  //   }
  // }, [channelId]);

  return (
    <MainLayout>
      {selectedChannel ? (
        <ChannelComponent channel={selectedChannel} />
      ) : (
        <NoDataFound type="channel" />
      )}
    </MainLayout>
  );
};

export default ChannelPage;

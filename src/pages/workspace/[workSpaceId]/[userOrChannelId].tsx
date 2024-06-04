import Loader from "@/common/Loader";
import ChannelComponent from "@/components/channel/ChannelComponent";
import NoDataFound from "@/components/exception/NoDataFound";
import MainLayout from "@/pages/layout";
import { getChannel } from "@/slices/channelSlice";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

const UserChannelPage = () => {
  const router = useRouter();
  const { workSpaceId, userOrChannelId } = router.query;
  const normalizedWorkSpaceId = Array.isArray(workSpaceId)
    ? workSpaceId[0]
    : workSpaceId;
  const normalizedUserOrChannelId = Array.isArray(userOrChannelId)
    ? userOrChannelId[0]
    : userOrChannelId;

  const { dispatch } = useAppStore();
  const { getChannelStatus, activeChannel } = useAppSelector(
    (state) => state.channel
  );

  useEffect(() => {
    if (normalizedUserOrChannelId && normalizedWorkSpaceId)
      dispatch(
        getChannel({
          channelId: normalizedUserOrChannelId,
          workspaceId: normalizedWorkSpaceId,
        })
      );
  }, [normalizedUserOrChannelId, normalizedWorkSpaceId, dispatch, router]);

  if (getChannelStatus === "loading") {
    <div className="h-full w-full bg-slack-brand-ffffff flex justify-center items-center">
      <Loader fill="white" />
    </div>;
  }

  return (
    <MainLayout>
      <div className={`h-full bg-slack-brand-ffffff overflow-y-auto `}>
        {activeChannel ? (
          <ChannelComponent channel={activeChannel} />
        ) : (
          <NoDataFound type="channel" />
        )}
      </div>
    </MainLayout>
  );
};

export default UserChannelPage;

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import DirectMessageList from "../direct-message/DirectMessageList";
import WorkSpaceName from "../workspace/WorkSpaceName";
import users from "../../pages/user/users.json";
import Image from "next/image";
import MessageType from "@/common/MessageType";
import ChannelsList from "../channel/ChanneList";
import AddMenuButton from "@/common/AddButton";
import CreateNewChannel from "../channel/CreateChannel";
import Modal from "@/common/Model";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { getAllChannels } from "@/slices/channelSlice";
import Loader from "@/common/Loader";

const SideBar: React.FC = () => {
  const router = useRouter();
  const { dispatch } = useAppStore();

  const { workSpaceId, userOrChannelId } = router.query;

  const { channels, status, error } = useAppSelector((state) => state.channel);

  useEffect(() => {
    dispatch(
      getAllChannels(
        Array.isArray(workSpaceId) ? workSpaceId.join("/") : workSpaceId || ""
      )
    );
  }, [dispatch, workSpaceId]);

  const [activeChannelOrDM, setActiveChannelOrDM] = useState<string | "">("");

  const [activeChannel, setActiveChannel] = useState<number | null>(null);
  const [activeDirectMessage, setActiveDirectMessage] = useState<number | null>(
    null
  );
  const [isChannelsExpanded, setIsChannelsExpanded] = useState(true);
  const [isMessageExpanded, setIsMessageExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [width, setWidth] = useState<number>(250);
  const isResized = useRef(false);

  useEffect(() => {
    if (userOrChannelId) {
      const channelId = Array.isArray(userOrChannelId)
        ? userOrChannelId.join("/")
        : userOrChannelId;
      setActiveChannelOrDM(channelId);
    }
  }, [userOrChannelId]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;
        const isWidthInRange = newWidth >= 250 && newWidth <= 400; // minWidth and maxWidth

        return isWidthInRange ? newWidth : previousWidth;
      });
    };

    const handleMouseUp = () => {
      isResized.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      const screenWidth = window.innerWidth;
      setIsSidebarHidden(screenWidth < 768);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleChannelClick = (channel: { id: string }) => {
    setActiveDirectMessage(null);
    router.push(`/workspace/${workSpaceId}/${channel.id}`);
  };

  const handleDirectMessageClick = (user: { id: number }) => {
    setActiveChannel(null);
    router.push(`/user/${user.id}`);
  };

  const redirectToNewMessage = () => {
    router.push("/new-message");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const hideSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  if (status === "loading") {
    return (
      <div className="flex h-full">
        <div
          style={{ width: `${width / 16}rem` }}
          className={`w-72 bg-slack-ui-3f0e40 h-full ${
            !isSidebarHidden ? "block" : "hidden"
          } lg:block`}
        >
          <Loader fill="white" className="mt-[400px] ml-[100px]" />
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex h-full">
        <div
          style={{ width: `${width / 16}rem` }}
          className={`w-72 bg-slack-ui-3f0e40 text-white h-full ${
            !isSidebarHidden ? "block" : "hidden"
          } lg:block`}
        >
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-full">
        {!isSidebarHidden && (
          <div
            style={{ width: `${width / 16}rem` }}
            className={`w-72 bg-slack-ui-3f0e40 h-full ${
              !isSidebarHidden ? "block" : "hidden"
            } lg:block`}
          >
            <div className="h-16 flex items-center justify-between px-4 border-b border-slack-ui-522653">
              <WorkSpaceName />
              <div className="flex flex-row items-start justify-start">
                <div
                  className="rounded-81xl bg-slack-brand-ffffff shadow-[0px_1px_3px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-center justify-center p-2 cursor-pointer"
                  onClick={redirectToNewMessage}
                >
                  <Image
                    height={18}
                    width={18}
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/newmessage.svg"
                  />
                </div>
              </div>
            </div>
            <div className="px-2 py-3">
              <MessageType
                type="Channels"
                isExpanded={isChannelsExpanded}
                setIsExpanded={setIsChannelsExpanded}
              />
              {isChannelsExpanded && (
                <>
                  {channels.map((channel) => (
                    <ChannelsList
                      key={channel.id}
                      isPrivate={channel.isPrivate}
                      name={channel.name}
                      channelsStyle="stretch"
                      isActive={activeChannelOrDM === channel.id}
                      onClick={() => handleChannelClick(channel)}
                    />
                  ))}
                  <AddMenuButton type="Add channels" onClick={openModal} />
                </>
              )}
            </div>
            <div className="px-2 py-3">
              <MessageType
                type="Direct messages"
                isExpanded={isMessageExpanded}
                setIsExpanded={setIsMessageExpanded}
              />
              <div className="flex flex-col items-start justify-start">
                {isMessageExpanded && (
                  <>
                    {users.map((user) => (
                      <DirectMessageList
                        key={user.id}
                        imgSrc={user.imgSrc}
                        name={user.name}
                        isActive={activeDirectMessage === user.id}
                        you={user.you}
                        isOnline={user.isOnline}
                        onClick={() => handleDirectMessageClick(user)}
                        showStatusIcon={true}
                      />
                    ))}
                    <AddMenuButton
                      type="Add colleagues"
                      onClick={redirectToNewMessage}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div
          className="w-2 cursor-col-resize relative"
          onMouseDown={() => {
            isResized.current = true;
          }}
        >
          <div
            className="md:hidden z-50 w-[20px] ml-[-5px] h-[20px] top-16 bg-[#3f0e40] text-slate-500 p-0.5 rounded-full border border-slate-200 mt-[300px] pointer-cursor"
            onClick={hideSidebar}
            style={{
              borderRadius: "50%",
              position: "relative",
              transform: isSidebarHidden ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.5s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                height: "4px",
                width: "12px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
      </div>

      <Modal showModal={isModalOpen} onClose={closeModal}>
        <CreateNewChannel closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default SideBar;

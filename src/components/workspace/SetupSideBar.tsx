import React, { useEffect, useRef, useState } from "react";
import DirectMessageList from "../direct-message/DirectMessageList";
import WorkSpaceName from "./WorkSpaceName";
import MessageType from "@/common/MessageType";
import ChannelsList from "../channel/ChanneList";
import { SetupSideBarProps } from "@/types/types";

const SetupSideBar: React.FC<SetupSideBarProps> = ({
  channel,
  invitedUsers,
  spaceName,
}) => {
  const [isChannelsExpanded, setIsChannelsExpanded] = useState(true);
  const [isMessageExpanded, setIsMessageExpanded] = useState(true);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [width, setWidth] = useState(350); // defaultWidth
  const isResized = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;
        const isWidthInRange = newWidth >= 250 && newWidth <= 500; // minWidth and maxWidth

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

  const hideSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

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
              <div className="rounded-md flex flex-row items-center justify-start py-1 pr-1 pl-2 text-left text-lg text-slack-brand-ffffff font-lato">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[133%]">{spaceName}</b>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-px"></div>
              </div>
            </div>
            <div className="px-2 py-3">
              {channel && (
                <>
                  <MessageType
                    type="Channels"
                    isExpanded={isChannelsExpanded}
                    setIsExpanded={setIsChannelsExpanded}
                  />

                  {isChannelsExpanded && (
                    <ChannelsList
                      key={channel}
                      name={channel}
                      isPrivate
                      channelsStyle="stretch"
                    />
                  )}
                </>
              )}
            </div>
            <div className="px-2 py-3">
              {invitedUsers.length > 0 && (
                <>
                  <MessageType
                    type="Direct messages"
                    isExpanded={isMessageExpanded}
                    setIsExpanded={setIsMessageExpanded}
                  />
                  <div className="flex flex-col items-start justify-start">
                    {isMessageExpanded &&
                      invitedUsers.map(
                        (user) =>
                          user && (
                            <DirectMessageList
                              key={user}
                              imgSrc={"/no-photo-c.svg"}
                              name={user.split("@")[0]}
                              you={false}
                              isOnline={false}
                              isActive={false}
                              showStatusIcon={false}
                              onClick={() => {}}
                            />
                          )
                      )}
                  </div>
                </>
              )}
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
    </>
  );
};

export default SetupSideBar;

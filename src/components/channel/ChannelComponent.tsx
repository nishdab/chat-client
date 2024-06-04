import React, { useEffect, useState } from "react";
import ChannelHeader from "./ChannelHeader";
import ChatMessage from "../direct-message/ChatMessage";
import TextEditor from "../text-editor/TextEditor";
import { ChannelComponentProps, Message } from "@/types/types";
import Slackbot from "@/common/ChatBot";
import MessageTracker from "../direct-message/MessageTracker";
import ProfileDialog from "../profile/ProfileDialogue";

const ChannelComponent: React.FC<ChannelComponentProps> = ({ channel }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // useEffect(() => {
  //   if (channel) {
  //     setMessages([
  //       {
  //         id: 1,
  //         profileSrc: "/no-photo-a.svg",
  //         senderName: "Nishant",
  //         messageContent: {
  //           type: "doc",
  //           content: [
  //             {
  //               type: "paragraph",
  //               content: [
  //                 {
  //                   type: "text",
  //                   marks: [{ type: "bold" }],
  //                   text: "Hey",
  //                 },
  //                 {
  //                   type: "text",
  //                   text: " mate! How are you?",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         app: false,
  //         statusCircle: false,
  //       },
  //     ]);
  //   }
  // }, [channel]);

  const openProfileDialogue = (userInfo: any) => {
    setIsProfileOpen(true);
    console.log("userInfo", userInfo);
  };

  const sendMessage = (message: any) => {
    let newMessage = {
      id: messages.length + 1,
      profileSrc: "/no-photo-a.svg",
      senderName: "Nishant Dabre",
      messageContent: message,
      app: false,
      statusCircle: false,
    };

    // Set the first message immediately
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Set the second message after 3 seconds
    setTimeout(() => {
      let secondMessage = {
        id: messages.length + 2,
        profileSrc: "/chat-bot.png",
        senderName: "Chat Bot",
        messageContent: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Sure I will do that",
                },
              ],
            },
          ],
        },
        app: true,
        statusCircle: false,
      };

      setMessages((prevMessages) => [...prevMessages, secondMessage]);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full bg-slack-brand-ffffff font-lato">
      <ChannelHeader channel={channel} />

      <div className="flex-grow flex flex-col items-start justify-start p-4 box-border overflow-y-scroll h-[650px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-end py-0 px-[18px] gap-[10px_0px]">
          {/* <Slackbot /> */}

          {messages.map((message) => (
            <MessageTracker
              key={message.id}
              profileSrc={message.profileSrc}
              senderName={message.senderName}
              messageContent={message.messageContent}
              app={message.app}
              statusCircle={message.statusCircle}
              openProfileDialogue={openProfileDialogue}
            />
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 w-full bg-slack-brand-ffffff pt-0 px-5 pb-6 box-border">
        <TextEditor sendMessage={sendMessage} />
      </div>

      {isProfileOpen && (
        <div className="w-[22%]">
          <ProfileDialog onClose={() => setIsProfileOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default ChannelComponent;

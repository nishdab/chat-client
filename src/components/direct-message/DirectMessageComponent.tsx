import React, { useEffect, useState } from "react";
import ChatUserContainer from "./ChatUserContainer";
import TextEditor from "@/components/text-editor/TextEditor";
import AddNoteButton from "@/common/AddNoteButton";
import BookmarkButton from "@/common/BookmarkButton";
import MessageDate from "@/common/MessageDate";
import UserType from "./UserType";
import MessageTracker from "./MessageTracker";
import { Message, UserProps } from "@/types/types";
import ProfileDialog from "../profile/ProfileDialogue";

const DirectMessageComponent: React.FC<UserProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setMessages([
        {
          id: 1,
          profileSrc: user?.imgSrc,
          senderName: user?.name,
          messageContent: {
            type: "doc",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [{ type: "bold" }],
                    text: "Hey",
                  },
                  {
                    type: "text",
                    text: " mate! How are you?",
                  },
                ],
              },
            ],
          },
          app: false,
          statusCircle: false,
        },
      ]);
    }
  }, [user]);

  const openProfileDialogue = (userInfo: any) => {
    setIsProfileOpen(true);
    console.log("userInfo", userInfo);
  };

  return (
    <div
      className={`flex flex-row h-full bg-slack-brand-ffffff overflow-y-auto `}
    >
      <div className={`${isProfileOpen ? "w-[78%]" : "w-full"}`}>
        <div className="flex flex-col h-full">
          <div className="flex-shrink-0 w-full bg-slack-brand-ffffff shadow-[0px_1px_0px_rgba(29,_28,_29,_0.13)] h-16 flex items-center justify-between px-4 box-border">
            {user && (
              <ChatUserContainer name={user?.name} imgSrc={user?.imgSrc} />
            )}
            <div className="flex items-start justify-start p-2">
              <AddNoteButton />
            </div>
          </div>
          <div className="flex-grow flex flex-col items-start justify-start p-4 box-border overflow-y-scroll">
            <BookmarkButton />
            <div className="pt-4 pb-2">
              <UserType user={user} openProfileDialogue={openProfileDialogue} />
            </div>
            <MessageDate />
            <div className="flex-grow">
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
            <TextEditor sendMessage={(message: any) => setMessages(message)} />
          </div>
        </div>
      </div>

      {isProfileOpen && (
        <div className="w-[22%]">
          <ProfileDialog onClose={() => setIsProfileOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default DirectMessageComponent;

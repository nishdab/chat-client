import React from "react";
import Image from "next/image";
import { Message } from "@/types/types";
import ToolTip from "@/common/ToolTip";
import {
  BoldExtension,
  ItalicExtension,
  StrikeExtension,
  CalloutExtension,
  LinkExtension,
  BulletListExtension,
  OrderedListExtension,
  BlockquoteExtension,
  CodeExtension,
  CodeBlockExtension,
} from "remirror/extensions";
import { EditorComponent, Remirror, useRemirror } from "@remirror/react";
import css from "refractor/lang/css.js";
import javascript from "refractor/lang/javascript.js";
import json from "refractor/lang/json.js";
import markdown from "refractor/lang/markdown.js";
import typescript from "refractor/lang/typescript.js";

const MessageTracker: React.FC<Message> = ({
  profileSrc,
  senderName,
  messageContent,
  app = true,
  statusCircle,
  openProfileDialogue,
}) => {
  const initialJSONContent = messageContent?.doc
    ? messageContent.doc
    : messageContent;

  console.log(messageContent);
  const { manager, state, onChange } = useRemirror({
    extensions: () => [
      new BoldExtension({}),
      new ItalicExtension({}),
      new StrikeExtension({}),
      new CalloutExtension({ defaultType: "warn" }),
      new CodeExtension({}),
      new LinkExtension({ autoLink: true, selectTextOnClick: true }),
      new BulletListExtension({}),
      new OrderedListExtension({}),
      new BlockquoteExtension({}),
      new CodeExtension({}),
      new CodeBlockExtension({
        supportedLanguages: [css, javascript, json, markdown, typescript],
      }),
    ],
    content: initialJSONContent,
    selection: "start",
  });

  return (
    <div className="flex flex-col items-start justify-start py-2 box-border text-left text-mini text-slack-brand-1d1c1d font-lato self-stretch">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px]">
        <div className="flex flex-row items-center justify-center pt-1 px-0 pb-0">
          <div className="flex flex-row items-start justify-start relative group">
            <div className="w-9 relative h-9 z-[0]">
              <div className="absolute top-[0px] left-[0px] rounded-[5.54px] overflow-hidden flex flex-row items-start justify-start">
                <Image
                  height={20}
                  width={20}
                  className="w-9 relative h-9 object-cover cursor-pointer"
                  alt=""
                  src={profileSrc}
                  onClick={() =>
                    openProfileDialogue && openProfileDialogue({ senderName })
                  }
                />
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-[5.54px] bg-slack-ui-ffffff-13 w-9 h-9 overflow-hidden hidden" />
            </div>
            {statusCircle && (
              <Image
                height={10}
                width={10}
                className="w-2.5 absolute !m-[0] top-[28.2px] left-[29.6px] h-2.5 hidden z-[1]"
                alt=""
                src="/status.svg"
              />
            )}
            <ToolTip
              name={senderName}
              imgSrc={profileSrc}
              data-tooltip-target="tooltip-content"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 px-2">
          <div className="flex flex-row items-center justify-start gap-[0px_18px]">
            <div className="flex flex-row items-center justify-start gap-[0px_4px] relative group">
              <div className="flex flex-row items-center justify-center">
                <div
                  className="relative leading-[146.67%] font-black cursor-pointer"
                  onClick={() =>
                    openProfileDialogue && openProfileDialogue({ senderName })
                  }
                >
                  {senderName}
                </div>
                <ToolTip
                  name={senderName}
                  imgSrc={profileSrc}
                  data-tooltip-target="tooltip-content"
                />
              </div>
              {app && (
                <div className="rounded-sm bg-slack-ui-1d1c1d-13 flex flex-row items-center justify-center py-px px-[3px] text-3xs text-slack-ui-1d1c1d-70">
                  <div className="relative leading-[12px] font-semibold">
                    APP
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row items-center justify-center text-xs text-slack-ui-616061">
              <div className="relative leading-[146.67%]">9:16 AM</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-0 px-0 pb-1 box-border">
            <div className="flex-1 relative leading-[30%]">
              <Remirror
                manager={manager}
                initialContent={state}
                onChange={onChange}
                editable={false}
              >
                <EditorComponent />
              </Remirror>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTracker;

import React, { useCallback, useState } from "react";
import {
  BoldExtension,
  ItalicExtension,
  CalloutExtension,
  StrikeExtension,
  LinkExtension,
  BulletListExtension,
  OrderedListExtension,
  BlockquoteExtension,
  CodeExtension,
  CodeBlockExtension,
  PlaceholderExtension,
} from "remirror/extensions";
import {
  EditorComponent,
  Remirror,
  useActive,
  useChainedCommands,
  useRemirror,
} from "@remirror/react";

import css from "refractor/lang/css.js";
import javascript from "refractor/lang/javascript.js";
import json from "refractor/lang/json.js";
import markdown from "refractor/lang/markdown.js";
import typescript from "refractor/lang/typescript.js";

import Divider from "@/common/Divider";
import LinkButton from "@/common/LinkButton";
import Image from "next/image";

export const Menu: React.FC<{ type: string; img: string }> = ({
  type,
  img,
}) => {
  const chain = useChainedCommands();
  const {
    bold,
    italic,
    strike,
    orderedList,
    bulletList,
    blockquote,
    code,
    codeBlock,
  } = useActive();

  const handleMenuClick = (actionType: string) => {
    let command;
    switch (actionType) {
      case "bold":
        command = chain.toggleBold();
        break;
      case "italic":
        command = chain.toggleItalic();
        break;
      case "strikethrough":
        command = chain.toggleStrike();
        break;
      case "numberlist":
        command = chain.toggleOrderedList();
        break;
      case "bulletlist":
        command = chain.toggleBulletList();
        break;
      case "blockquote":
        command = chain.toggleBlockquote();
        break;
      case "code":
        command = chain.toggleCode();
        break;
      case "codeblock":
        command = chain.toggleCodeBlock();
        break;
      // Add more cases for other action types as needed
      default:
        command = null;
    }

    if (command) {
      command.focus().run();
    }
  };

  let isActive = false;

  switch (type) {
    case "bold":
      isActive = bold();
      break;
    case "italic":
      isActive = italic();
      break;
    case "strikethrough":
      isActive = strike();
      break;
    case "numberlist":
      isActive = orderedList();
      break;
    case "bulletlist":
      isActive = bulletList();
      break;
    case "blockquote":
      isActive = blockquote();
      break;
    case "code":
      isActive = code();
      break;
    case "codeblock":
      isActive = codeBlock();
      break;
    default:
      isActive = false;
  }

  return (
    <div
      className={`rounded flex flex-row items-center justify-center p-[5px] opacity-[0.5] cursor-pointer`}
      onClick={() => {
        handleMenuClick(type);
      }}
      style={{
        background: isActive ? "silver" : undefined,
      }}
    >
      <Image
        className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        alt=""
        src={img}
        height={18}
        width={18}
      />
    </div>
  );
};

const DOC = {
  type: "doc",
  content: [
    {
      type: "paragraph",
    },
  ],
};

interface TextEditorProps {
  sendMessage: (message: any) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ sendMessage }) => {
  const [editorContent, setEditorContent] = useState<string>("");

  const { manager, state, setState, onChange } = useRemirror({
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
      new PlaceholderExtension({ placeholder: `I'm a placeholder!` }),
    ],
    content: "<p></p>",
    selection: "start",
    stringHandler: "html",
  });

  const handleSendClick = useCallback(() => {
    const jsonContent = manager.view.state.toJSON();
    console.log("JSON Content:", jsonContent);
    // alert(JSON.stringify(jsonContent));
    sendMessage(jsonContent);

    // Clear the editor content after sending
    manager.view.updateState(manager.createState({ content: DOC }));
    setEditorContent("");
  }, [manager]);

  return (
    <Remirror
      manager={manager}
      initialContent={state}
      onChange={(parameter) => {
        onChange(parameter);
        setEditorContent(parameter.state.doc.textContent); // Update editor content state
      }}
    >
      <div className="rounded-lg bg-slack-brand-ffffff box-border flex flex-col items-start justify-start self-stretch border-[1px] border-solid border-slack-ui-1d1c1d-13">
        <div className="self-stretch rounded-t-lg rounded-b-none bg-slack-brand-f8f8f8 flex flex-col items-start justify-start p-1">
          <div className="flex flex-row items-center justify-center py-px px-0 gap-[0px_4px]">
            <Menu type="bold" img="/bold.svg" />
            <Menu type="italic" img="/italic.svg" />
            <Menu type="strikethrough" img="/strikethrough.svg" />
            <Divider />
            <LinkButton img="/link.svg" />
            <Divider />
            <Menu type="numberlist" img="/numberlist.svg" />
            <Menu type="bulletlist" img="/bulletlist.svg" />
            <Divider />
            <Menu type="blockquote" img="/blockquote.svg" />
            <Divider />
            <Menu type="code" img="/code.svg" />
            <Menu type="codeblock" img="/codeblock.svg" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-2 px-3 text-left text-mini font-lato">
          <div className="w-full">
            <EditorComponent />
          </div>
        </div>
        <div className="self-stretch rounded-t-none rounded-b-lg flex flex-row items-center justify-between pt-0 pb-0.5 pr-1 pl-1.5">
          <div className="flex flex-row items-center justify-start gap-[0px_2px]">
            <div className="w-6 rounded-81xl bg-slack-ui-1d1c1d-6 h-6 flex flex-row items-center justify-center p-[5px] box-border">
              <Image
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
                width={20}
                height={20}
              />
            </div>

            <div className="w-6 h-6 flex flex-row items-center justify-center p-[5px] box-border">
              <Image
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                alt=""
                src="/emoji1.svg"
                width={20}
                height={20}
              />
            </div>

            <div className="w-6 h-6 flex flex-row items-center justify-center p-[5px] box-border">
              <Image
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                alt=""
                src="/mention.svg"
                width={20}
                height={20}
              />
            </div>
            <Divider />
          </div>
          <div className="flex flex-col items-start justify-start py-1 pr-0.5 pl-1">
            <div
              className="rounded-tl rounded-tr-none rounded-br-none rounded-bl flex flex-row items-start justify-start py-0.5 px-2"
              onClick={handleSendClick}
            >
              <div className="flex flex-row items-start justify-start py-1 px-0 cursor-pointer">
                {editorContent ? (
                  <Image
                    height={16}
                    width={16}
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/send-enabled.svg" // Use your sendEnable icon path here
                  />
                ) : (
                  <Image
                    height={16}
                    width={16}
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/send-disabled.svg" // Use your sendFill icon path here
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Remirror>
  );
};

export default TextEditor;

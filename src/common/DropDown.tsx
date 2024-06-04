import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DropDownComponentProps } from "@/types/types";

const DropDownComponent: React.FC<DropDownComponentProps> = ({
  data,
  onSelect,
}) => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    } else if (e.key === "ArrowDown" && selectedIndex < data.length - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeydownEvent = (event: KeyboardEvent) =>
      handleKeyDown((event as unknown) as React.KeyboardEvent<HTMLDivElement>);
    window.addEventListener("keydown", handleKeydownEvent);

    return () => {
      window.removeEventListener("keydown", handleKeydownEvent);
    };
  }, [selectedIndex]);

  return (
    <div className="relative">
      <div className="ml-[40px] absolute top-0 left-0 bg-stone-50 rounded-lg shadow">
        <div className="py-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-1.5 ${
                index === selectedIndex ? "bg-sky-700" : ""
              } cursor-pointer`}
              onClick={() => {
                router.push(`/user/${item.id}`);
                onSelect(item);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(-1)}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    className="w-5 h-5 rounded-full"
                    src={item.imgSrc || "https://via.placeholder.com/20x20"}
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-base font-semibold text-zinc-900">
                  {item.name}
                </div>
                {item.isOnline && (
                  <div className="w-2.5 h-2.5 bg-emerald-700 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownComponent;

import { useState } from "react";
import DropDownComponent from "@/common/DropDown";
import users from "@/pages/user/users.json";
import { NewMessageProps, User } from "@/types/types";

const NewMessage: React.FC<NewMessageProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter users based on the input value
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filteredData.slice(0, 10));
  };

  const handleInputFocus = () => {
    setIsDropDownVisible(true);
  };

  const handleInputBlur = () => {
    setIsDropDownVisible(false);
  };

  const handleDropDownSelect = (selectedUser: User | null) => {
    setInputValue(selectedUser?.name || "");
    setFilteredUsers([]);

    setTimeout(() => {
      setIsDropDownVisible(false);
    }, 100);
  };

  return (
    <div className="flex flex-col h-full bg-slack-brand-ffffff font-lato">
      <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start text-base">
        {/* New Message Header */}
        <div className="self-stretch bg-slack-brand-ffffff flex flex-row items-center justify-between py-[9px] px-3.5 border-b-[1px] border-solid border-gray-600">
          <div className="relative text-[18px] font-bold">New Message</div>
        </div>
        {/* To Input */}
        <div className="flex flex-row items-center justify-start py-[3px] pr-1.5 pl-0.5 gap-[0px_2px] text-left text-smi text-slack-ui-616061 font-lato">
          <div className="w-5 h-5 flex flex-row items-center justify-center">
            To:
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            // onBlur={() => setIsDropDownVisible(false)}
            placeholder="#a-channel, @somebody"
            className="w-full ml-[10px] py-1 px-2 border-none bg-transparent focus:outline-none font-lato text-lg"
          />
        </div>
        {/* Dropdown */}
        {isDropDownVisible && filteredUsers?.length > 0 && (
          <DropDownComponent
            data={filteredUsers}
            onSelect={handleDropDownSelect}
          />
        )}
      </div>
    </div>
  );
};

export default NewMessage;

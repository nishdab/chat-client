import React, { useState } from "react";
import {
  MessageProfileHeader,
  MessageProfileUserDescription,
} from "./MessageProfileHeader";
import { UserProps } from "@/types/types";
import Modal from "@/common/Model";
import EditProfileForm from "../profile/EditProfile";
import UploadProfilePhoto from "../profile/UploadProfilePhoto";
import PreviewImage from "../profile/PreviewImage";

const UserType: React.FC<UserProps> = ({ user, openProfileDialogue }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUplaodProfile, setIsUploadProfile] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsUploadProfile(false);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 md:gap-6 lg:gap-8">
      <MessageProfileHeader
        appTag={false}
        user={user}
        openProfileDialogue={openProfileDialogue}
      />
      <MessageProfileUserDescription user={user} />

      <div className="flex gap-5">
        {user?.you ? (
          <>
            <div
              className="cursor-pointer rounded bg-slack-brand-ffffff box-border h-9 flex flex-row items-center justify-center pt-0 px-2 pb-px text-center text-mini text-slack-brand-1d1c1d font-lato border-[1px] border-solid border-slack-ui-1d1c1d-30"
              onClick={() => setIsModalOpen(true)}
            >
              <b className="relative leading-[18px]">Edit Profile</b>
            </div>
            <div
              className="cursor-pointer rounded bg-slack-brand-ffffff box-border h-9 flex flex-row items-center justify-center pt-0 px-2 pb-px text-center text-mini text-slack-brand-1d1c1d font-lato border-[1px] border-solid border-slack-ui-1d1c1d-30 ml-2"
              onClick={() => {
                setIsUploadProfile(true);
                setIsModalOpen(true);
              }}
            >
              <b className="relative leading-[18px]">Upload Profile Photo</b>
            </div>
          </>
        ) : (
          <div
            className="cursor-pointer rounded bg-slack-brand-ffffff box-border h-9 flex flex-row items-center justify-center pt-0 px-2 pb-px text-center text-mini text-slack-brand-1d1c1d font-lato border-[1px] border-solid border-slack-ui-1d1c1d-30 ml-2"
            onClick={() =>
              openProfileDialogue && openProfileDialogue({ name: user?.name })
            }
          >
            <b className="relative leading-[18px]">View Profile</b>
          </div>
        )}
      </div>

      <Modal showModal={isModalOpen} onClose={closeModal}>
        {isUplaodProfile ? (
          <UploadProfilePhoto onCancel={closeModal} />
        ) : (
          <EditProfileForm onCancel={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default UserType;

import React from "react";

export interface AddMenuButtonType {
  type: string;
  onClick: () => void;
}

export interface User {
  imgSrc: string;
  name: string;
  you?: boolean;
  id: number;
  isOnline: boolean;
}

export interface DropDownComponentProps {
  data: User[];
  onSelect: (selectedItem: User) => void;
}

export interface LinkButtonProps {
  img: string;
}

export interface MessageTypeProps {
  type: string;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface SearchBarProps {
  profilePhoto: string;
}

export interface ChannelFormProps {
  onCreate: (channelName: string, organizationName: string) => void;
  errorMessage: string;
}

export interface Message {
  id?: number;
  profileSrc: string;
  senderName: string;
  messageContent: any;
  app?: boolean;
  statusCircle: boolean;
  openProfileDialogue?: (userInfo: any) => void;
}

export interface ProfileDialogProps {
  onClose: () => void;
}

export interface ChannelComponentProps {
  channel: Channel;
}

export interface ChannelsListProps {
  isPrivate: boolean;
  name: string;
  channelsStyle: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ChatMessageProps {
  avatarSrc: string;
  sender: string;
  time: string;
  content: string;
}

export interface ChatUserContainerProps {
  name: string;
  imgSrc: string;
}

export interface DirectMessageComponentProps {
  selectedUser: User;
}

export interface DirectMessageListProps {
  imgSrc: string;
  isOnline: boolean;
  name: string;
  you?: boolean;
  showStatusIcon?: boolean;
  isActive: boolean;
  onClick: () => void;
}

export interface MessageProfileProps {
  appTag?: boolean;
  user: User;
  openProfileDialogue?: (userInfo: any) => void;
}

export interface UserProps {
  user: User;
  openProfileDialogue?: (userInfo: any) => void;
}

export interface NoDataFoundProps {
  type: string;
  message?: string;
}

export interface NewMessageProps {
  users: User[];
}

export interface CreateChannelStepProps {
  channelName: string;
  setChannelName: React.Dispatch<React.SetStateAction<string>>;
}

export interface InviteUserStepProps {
  spaceName: string;
  invitedUsers: string[];
  setInvitedUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface SetupSideBarProps {
  channel: string;
  invitedUsers: string[];
  spaceName: string;
}

export interface WorkspaceProps {
  organizationId: string;
  memberCount: number;
  profilePicture?: string;
  name: string;
}

export interface WorkspaceSidebarProps {
  workSpaceList: WorkspaceProps[];
  activeWorkspace: string;
  onWorkspaceClick: (workSpaceId: string) => void;
}

export interface WorkSpaceNameProps {
  workspace: string;
}

export interface WorkspaceNameStepProps {
  spaceName: string;
  setSpaceName: (value: string) => void;
}

export interface Member {
  id: string;
  name: string;
}

export interface Organization {
  id: string;
  name: string;
}

export interface EditProfileFormProps {
  onCancel: () => void;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  organizationId: string;
  channelType: string;
}

export interface ChannelState {
  channels: Channel[];
  activeChannel: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  createChannelStatus: "idle" | "loading" | "succeeded" | "failed";
  getChannelStatus: "idle" | "loading" | "succeeded" | "failed";
}

export interface CreateChannelProps {
  name: string;
  description: string;
  isPrivate: boolean;
  organizationId: string;
  channelType: string;
}

export interface WorkspaceProps {
  name: string;
  imageUrl: string;
  memberCount: number;
  redirectUrl: string;
}

export interface GetChannelArgs {
  channelId: string;
  workspaceId: string;
}

import { Channel, GetChannelArgs, Member } from "@/types/types";

const createChannel = async (
  orgId: string,
  name: string,
  channelType: string,
  isPrivate: boolean
): Promise<Channel> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/channel/org/${orgId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          channel_type: channelType,
          is_private: isPrivate,
        }),
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to create channel");
    }
  } catch (error) {
    throw new Error("An error occurred while creating channel");
  }
};

const getAllChannels = async (orgId: string): Promise<Channel> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/channel/org/${orgId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch channel");
    }
  } catch (error) {
    throw new Error("An error occurred while fetching channel");
  }
};

const getChannel = async (
  channelId: string,
  workspaceId: string
): Promise<Channel> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/channel/${channelId}/org/${workspaceId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch channel");
    }
  } catch (error) {
    throw new Error("An error occurred while fetching channel");
  }
};

const addMembersToChannel = async (
  channelId: string,
  orgId: string,
  userIds: string[]
): Promise<Member[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/channel/member`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          channel_id: channelId,
          organisation_id: orgId,
          user_ids: userIds,
        }),
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to add members to channel");
    }
  } catch (error) {
    throw new Error("An error occurred while adding members to channel");
  }
};

export { createChannel, getChannel, addMembersToChannel, getAllChannels };

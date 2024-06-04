import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as channelService from "../services/channelService";
import { CreateChannelProps, ChannelState } from "@/types/types";

const initialState: ChannelState = {
  channels: [],
  activeChannel: null,
  status: "idle",
  createChannelStatus: "idle",
  getChannelStatus: "idle",
  error: null,
};

export const getAllChannels = createAsyncThunk(
  "channel/getAll",
  async (organizationId: string) => {
    return await channelService.getAllChannels(organizationId);
  }
);

export const getChannel = createAsyncThunk(
  "channel/get",
  async ({
    channelId,
    workspaceId,
  }: {
    channelId: string;
    workspaceId: string;
  }) => {
    return await channelService.getChannel(channelId, workspaceId);
  }
);

export const createChannel = createAsyncThunk(
  "channel/create",
  async (channel: CreateChannelProps) => {
    return await channelService.createChannel(
      channel.organizationId,
      channel.name,
      channel.channelType,
      channel.isPrivate
    );
  }
);

const clearChannel = (state: ChannelState) => {
  state.status = "idle";
  state.error = null;
  state.createChannelStatus = "idle";
  state.activeChannel = null;
  state.channels = [];
};

// Slice for the org state
const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    clearChannel,
    appendChannelToList(state, action) {
      state.channels.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllChannels.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.activeChannel = null;
        state.channels = [];
      })
      .addCase(getAllChannels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activeChannel = null;
        if (Array.isArray(action.payload)) {
          state.channels = action.payload;
        } else {
          console.warn("Payload is not an array of channels:", action.payload);
        }
      })
      .addCase(getAllChannels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Fetching Channels failed";
        state.channels = [];
        state.activeChannel = null;
      })
      .addCase(getChannel.pending, (state) => {
        state.getChannelStatus = "loading";
        state.error = null;
      })
      .addCase(getChannel.fulfilled, (state, action) => {
        state.getChannelStatus = "succeeded";
        state.activeChannel = action.payload;
      })
      .addCase(getChannel.rejected, (state, action) => {
        state.getChannelStatus = "failed";
        state.error = action.error.message || "get organization failed";
      })
      .addCase(createChannel.pending, (state) => {
        state.createChannelStatus = "loading";
        state.error = null;
      })
      .addCase(createChannel.fulfilled, (state, action) => {
        state.createChannelStatus = "succeeded";
        state.activeChannel = action.payload;
        state.channels.push(action.payload);
      })
      .addCase(createChannel.rejected, (state, action) => {
        state.createChannelStatus = "failed";
        state.error = action.error.message || "Create organization failed";
      });
  },
});

// Export the org slice reducer and actions
export default channelSlice.reducer;
export const channelAction = channelSlice.actions;

// Export the RootState type
export type RootState = ReturnType<typeof channelSlice.reducer>;

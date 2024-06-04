import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as orgServices from "../services/organizationService";

interface OrgData {
  name: string;
}

interface OrgState {
  orgData: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrgState = {
  orgData: null,
  status: "idle",
  error: null,
};

export const fetchOrgData = createAsyncThunk("organization/fetch", async () => {
  return await orgServices.getOrganizations();
});

export const createOrg = createAsyncThunk(
  "organization/create",
  async (orgData: OrgData) => {
    return await orgServices.createOrganization(orgData.name);
  }
);

const clearOrgStatus = (state: OrgState) => {
  state.status = "idle";
  state.error = null;
};

// Slice for the org state
const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    clearOrgStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrgData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchOrgData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orgData = action.payload;
      })
      .addCase(fetchOrgData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Fetching organization failed";
      })
      .addCase(createOrg.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createOrg.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newOrg = action.payload;
        state.orgData = state.orgData ? [...state.orgData, newOrg] : [newOrg];
      })
      .addCase(createOrg.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Create organization failed";
      });
  },
});

// Export the org slice reducer and actions
export default orgSlice.reducer;
export const orgActions = orgSlice.actions;

// Export the RootState type
export type RootState = ReturnType<typeof orgSlice.reducer>;

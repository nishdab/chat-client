import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authServices from "../services/authService";

interface UserCredentials {
  email: string;
  password: string;
}

interface RejectedValue {
  message: string;
  status: number;
}

interface ErrorResponse {
  message: string;
}

interface AuthState {
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await authServices.loginService(
        credentials.email,
        credentials.password
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await authServices.signUpService(
        credentials.email,
        credentials.password
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const clearAuthStatus = (state: AuthState) => {
  state.status = "idle";
  state.error = null;
};

// Slice for the auth state
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthStatus,
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.status = "failed";
        state.error = action.payload
          ? (action.payload as ErrorResponse).message ||
            "An error occurred during Login."
          : "Login failed";
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error = action.payload
          ? (action.payload as ErrorResponse).message ||
            "An error occurred during signup."
          : "Registration failed";
      });
  },
});

// Export the auth slice reducer and actions
export default authSlice.reducer;
export const authActions = authSlice.actions;

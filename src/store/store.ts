// store.ts

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createIdbStorage from "@piotr-cz/redux-persist-idb-storage";
import authSlice from "@/slices/authSlice";
import orgSlice from "@/slices/orgSlice";
import channelSlice from "@/slices/channelSlice";

// Define rootReducer
const rootReducer = combineReducers({
  auth: authSlice,
  organization: orgSlice,
  channel: channelSlice,
});

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Persist configuration
const persistConfig = {
  key: "root",
  storage: createIdbStorage({
    name: "reduxPresistence",
    storeName: "reduxPresistenceStore",
  }),
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
export const persistor = persistStore(store);

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

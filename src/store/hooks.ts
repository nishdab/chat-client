import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { persistor } from "./store"; // Import persistor directly from store

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = (): {
  dispatch: AppDispatch;
  persistor: typeof persistor;
} => {
  const dispatch = useAppDispatch();
  return { dispatch, persistor };
};

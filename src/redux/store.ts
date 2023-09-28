import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toggleMenuSlice from "./slices/toggleMenu";

const rootReducer = combineReducers({
  toggle: toggleMenuSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// app/store.ts

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import leadReducer from "@/app/dashboard/leads/leadSlice"; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    leads: leadReducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable if you have non-serializable values in state
    }),
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

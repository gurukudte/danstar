import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ContactState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  status: "idle",
  error: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactData: (state, action: PayloadAction<Partial<ContactState>>) => {
      return { ...state, ...action.payload };
    },
    setStatus: (state, action: PayloadAction<ContactState["status"]>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { setContactData, setStatus, setError, resetForm } =
  contactSlice.actions;

export default contactSlice.reducer;

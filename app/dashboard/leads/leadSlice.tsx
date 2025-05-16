// features/leads/leadSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "@/redux/store";

export interface Lead {
  id?: string;
  fullName: string;
  email?: string | null;
  phone: string;
  serviceType?: string | null;
  message?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LeadState {
  leads: Lead[];
  currentLead: Lead | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LeadState = {
  leads: [],
  currentLead: null,
  status: "idle",
  error: null,
};
interface ErrorResponse {
  message: string;
  statusCode?: number;
  error?: string;
}

// Async Thunks
export const fetchLeads = createAsyncThunk<
  Lead[],
  void,
  { rejectValue: ErrorResponse }
>("leads/fetchLeads", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Lead[]>("/api/leads");
    // Validate response data structure
    if (!response.data) {
      throw new Error("Invalid data format received from server");
    }
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    // Handle Axios errors (network issues, 4xx/5xx responses)
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message || error.message,
        statusCode: error.response?.status,
        error: error.response?.data?.error || "Unknown error occurred",
      });
    }

    // Handle other unexpected errors
    return rejectWithValue({
      message: (err as Error).message || "Failed to fetch leads",
      error: "Unexpected error",
    });
  }
});

export const addLead = createAsyncThunk(
  "leads/addLead",
  async (
    lead: Omit<Lead, "id" | "createdAt" | "updatedAt">,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/leads", lead);
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        return rejectWithValue({
          message: error.response?.data?.message || error.message,
          status: error.response?.status,
        });
      }
      // Handle generic errors
      return rejectWithValue({
        message: (error as Error).message || "An unknown error occurred",
      });
    }
  }
);

export const updateLead = createAsyncThunk(
  "leads/updateLead",
  async (lead: Lead) => {
    const response = await axios.put(`/api/leads/${lead.id}`, lead);
    return response.data;
  }
);

export const deleteLead = createAsyncThunk(
  "leads/deleteLead",
  async (leadId: string) => {
    await axios.delete(`/api/leads/${leadId}`);
    return leadId;
  }
);

export const fetchLeadById = createAsyncThunk(
  "leads/fetchLeadById",
  async (leadId: string) => {
    const response = await axios.get(`/api/leads/${leadId}`);
    return response.data;
  }
);

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setCurrentLead: (state, action: PayloadAction<Lead | null>) => {
      state.currentLead = action.payload;
    },
    clearCurrentLead: (state) => {
      state.currentLead = null;
    },
    resetLeadState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Fetch Leads
      .addCase(fetchLeads.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leads = action.payload;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch leads";
      })

      // Add Lead
      .addCase(addLead.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addLead.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leads.push(action.payload);
      })
      .addCase(addLead.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error);
        state.error = action.error.message || "Failed to add lead";
      })

      // Update Lead
      .addCase(updateLead.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLead.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.leads.findIndex(
          (lead) => lead.id === action.payload.id
        );
        if (index !== -1) {
          state.leads[index] = action.payload;
        }
        if (state.currentLead?.id === action.payload.id) {
          state.currentLead = action.payload;
        }
      })
      .addCase(updateLead.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to update lead";
      })

      // Delete Lead
      .addCase(deleteLead.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteLead.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leads = state.leads.filter((lead) => lead.id !== action.payload);
        if (state.currentLead?.id === action.payload) {
          state.currentLead = null;
        }
      })
      .addCase(deleteLead.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete lead";
      })

      // Fetch Lead by ID
      .addCase(fetchLeadById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeadById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentLead = action.payload;
      })
      .addCase(fetchLeadById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lead";
      });
  },
});

// Export actions
export const { setCurrentLead, clearCurrentLead, resetLeadState } =
  leadSlice.actions;

// Selectors
export const selectAllLeads = (state: RootState) => state.leads.leads;
export const selectCurrentLead = (state: RootState) => state.leads.currentLead;
export const selectLeadsStatus = (state: RootState) => state.leads.status;
export const selectLeadsError = (state: RootState) => state.leads.error;

export default leadSlice.reducer;

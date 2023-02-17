import { AppDirectory } from "@/appID";
import { Tab } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const tabtraySlice = createSlice({
  name: "tab",
  initialState: {
    tray: [] as Tab[],
    id: 0,
  },
  reducers: {
    addTab: (state, action) => {
      state.tray.push(action.payload);
      state.id = state.id + 1;
    },
    removeTab: (state, action) => {
      console.log("Previous: " + state.tray);
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      console.log("removing index: ", index);
      state.tray = state.tray.filter((_, i) => {
        return i !== index;
      });
      console.log("Current: " + state.tray);
    },
  },
});

export const { addTab, removeTab } = tabtraySlice.actions;
export default tabtraySlice.reducer;

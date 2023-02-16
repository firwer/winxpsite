import { AppDirectory } from "@/appID";
import { Tab } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const tabtraySlice = createSlice({
  name: "tab",
  initialState: {
    tray: [AppDirectory.get(6), AppDirectory.get(3)] as Tab[],
  },
  reducers: {
    addTab: (state, action) => {
      state.tray.push(action.payload);
    },
    removeTab: (state, action) => {
      state.tray = state.tray.filter((tab) => tab.id !== action.payload);
    },
  },
});

export const { addTab, removeTab } = tabtraySlice.actions;
export default tabtraySlice.reducer;

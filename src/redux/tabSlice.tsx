import { AppDirectory } from "@/appID";
import { Tab } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const tabtraySlice = createSlice({
  name: "tab",
  initialState: {
    tray: [] as Tab[],
    id: 0,
    currentFocusedTab: -1,
  },
  reducers: {
    addTab: (state, action) => {
      state.tray.push(action.payload);
      state.currentFocusedTab = action.payload.id;
      state.id = state.id + 1;
    },
    removeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray = state.tray.filter((_, i) => {
        return i !== index;
      });
    },
    minimizeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].isMinimized = true;
    },
    maximizeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].isMinimized = false;
    },
    setFocusedTab: (state, action) => {
      state.currentFocusedTab = action.payload.id;
    },
  },
});

export const { addTab, removeTab, minimizeTab, maximizeTab, setFocusedTab } =
  tabtraySlice.actions;
export default tabtraySlice.reducer;

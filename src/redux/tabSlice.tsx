import { AppDirectory } from "@/appID";
import { Tab } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export const tabtraySlice = createSlice({
  name: "tab",
  initialState: {
    tray: [] as Tab[],
    id: 0,
    currentFocusedTab: -1,
    currentZIndex: 0,
  },
  reducers: {
    addTab: (state, action) => {
      state.tray.push(action.payload);
      action.payload.zIndex = state.currentZIndex;
      state.currentFocusedTab = action.payload.id;
      state.id = state.id + 1;
      state.currentZIndex = state.currentZIndex + 1;
    },
    removeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      console.log("To Remove: " + index);
      state.tray = state.tray.filter((_, i) => {
        console.log(i, index);
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
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      if (index !== -1 && state.currentFocusedTab !== state.tray[index].id) {
        state.currentZIndex = state.currentZIndex + 1;
        state.tray[index].zIndex = state.currentZIndex;
      }
      state.currentFocusedTab = action.payload.id;
    },
  },
});

export const { addTab, removeTab, minimizeTab, maximizeTab, setFocusedTab } =
  tabtraySlice.actions;
export default tabtraySlice.reducer;

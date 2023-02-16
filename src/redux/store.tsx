import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";


export default configureStore( {
    reducer: {
        tab: tabReducer,
    },
});


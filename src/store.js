import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/activeStates/sideBarSlice"

export const store = configureStore({
    reducer:{
       sidebar: sidebarReducer
    }
})
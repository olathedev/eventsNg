import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/activeStates/sideBarSlice"
import eventReducer from "./features/event-managent/eventManagementSlice"

export const store = configureStore({
    reducer:{
       sidebar: sidebarReducer,
       userEvents: eventReducer
    }
})
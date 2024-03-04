import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/activeStates/sideBarSlice"
import eventReducer from "./features/event-managent/eventManagementSlice"
import userReducer from "./features/auth/userSlice"


export const store = configureStore({
    reducer:{
       sidebar: sidebarReducer,
       user: userReducer,
       userEvents: eventReducer
    }
})
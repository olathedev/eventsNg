import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/activeStates/sideBarSlice"
import eventReducer from "./features/event-managent/eventManagementSlice"
import userReducer from "./features/auth/userSlice"
import ticketReducer from "./features/ticket/ticketSlice"
import { apiSlice } from "./features/api/apiSlice";


export const store = configureStore({
    reducer:{
       sidebar: sidebarReducer,
       user: userReducer,
       userEvents: eventReducer,
       ticket: ticketReducer,
       [apiSlice.reducerPath]: apiSlice.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
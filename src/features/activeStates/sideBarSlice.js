import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: false
}

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSideBar: (state) => {
            state.sidebarOpen = true
        },

        closeSidebar: (state) => {
            state.sidebarOpen = false
        }
    }
})

export  const {openSideBar, closeSidebar} = sideBarSlice.actions

export default sideBarSlice.reducer
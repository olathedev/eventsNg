import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    profile: {}
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.token
            state.profile = action.payload.user
        },

        logout: (state) => {
            state.user = null
        }
    }
})


export const { login, logout } = userSlice.actions

export default userSlice.reducer


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    events: [],
    isLoading: false,

}

export const getEvents = createAsyncThunk('getUserEvents', async () => {
    try {
        const resp = await axios.get('/events/discover')
        console.log(resp);
        return resp.data.event
    } catch (error) {
        console.log(error);
    }
})
const eventManagementSlice = createSlice({
    name: 'userEvents',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getEvents.pending, (state) => {
            state.isLoading = true
        }).addCase(getEvents.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false
            state.events = action.payload
        }).addCase(getEvents.rejected, (state) => {
            state.isLoading = false
        })
    }
})


export default eventManagementSlice.reducer
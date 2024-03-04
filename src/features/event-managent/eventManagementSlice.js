import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    events: [],
    isLoading: false,
    error: null

}

export const getEvents = createAsyncThunk('userEvents/getUserEvents', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().user.user
        const resp = await axios.get('/events/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(resp);
        return resp.data.events
       
    } catch (error) {
        console.log(error);
    }
})


export const createEvent = createAsyncThunk('userEvents/createEvent', async (data, thunkApi) => {
    try {
        const token = thunkApi.getState().user.user
        const resp = await axios.post('/events/', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
        }).addCase(createEvent.fulfilled, (state, action) => {
            state.events = [action.payload, ...state.events]
        }).addCase(createEvent.rejected, (state, action) => {
            state.error = "Action failed, an error occured"
        })
    }
})

export const selectEvents = (state) => state.events

export default eventManagementSlice.reducer
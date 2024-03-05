import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    ticketType: null,
    ticketPrice: 0,
    qauntity: 0,
    total: 0
}

const ticketSLice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        qauntityState: (state, action) => {
            if(action.payload === "INCREMENT") {
                state.qauntity += 1
            }
            if(action.payload === "DECREMENT") {
                state.qauntity -= 1
            }
        }
    }
})


export const {qauntityState} = ticketSLice.actions

export default ticketSLice.reducer
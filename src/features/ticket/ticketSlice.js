import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    ticketType: '',
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
        },
        setPrice: (state, action) => {
            state.ticketPrice = action.payload
        },
        setTicket: (state, action) => {
            state.ticketType = action.payload
        }
    }
})


export const {qauntityState, setTicket, setPrice} = ticketSLice.actions

export default ticketSLice.reducer
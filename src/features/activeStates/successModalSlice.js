import { createSlice } from "@reduxjs/toolkit"

const successModalSlice = createSlice({
    name: 'SucessModal',
    initialState: {
        modalOpen: false
    },
    reducers: {
        openModal: (state) => {
            state.modalOpen = true
        },
        closeModal: (state) => {
            state.modalOpen = false
        }
    }
})


export const {openModal, closeModal} = successModalSlice.actions

export default successModalSlice.reducer
 
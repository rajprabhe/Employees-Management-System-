import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employeePopup: false,
    deletePopup: false
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openEmployeePopup: (state, actions) => {
            state.employeePopup = actions.payload ?? true
        },
        closeEmployeePopup: (state) => {
            console.log('chal raha hai')
            state.employeePopup = false
        },
        openDeletePopup: (state, actions) => {
            state.deletePopup = actions.payload ?? true
        },
        closeDeletePopup: (state) => {
            state.deletePopup = false
        }

    }
})


export const { openEmployeePopup, closeEmployeePopup, openDeletePopup, closeDeletePopup } = popupSlice.actions

export default popupSlice.reducer
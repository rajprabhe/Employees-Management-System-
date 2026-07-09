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
    closeEmployeePopup: (state, actions) => {
        state.employeePopup = false
    }

  }
})


export const { openEmployeePopup, closeEmployeePopup } = popupSlice.actions

export default popupSlice.reducer
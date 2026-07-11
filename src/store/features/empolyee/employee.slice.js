import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
    loading: false,
    error: null
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    // perform async task
   
})

employeeSlice.actions
export default employeeSlice.reducer
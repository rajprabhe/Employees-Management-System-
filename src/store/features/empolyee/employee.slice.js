import { createSlice } from "@reduxjs/toolkit";
import { DeleteEmployee, getEmployee, postEmployee, updateEmployee } from "./employee.thunk";

const initialState = {
    employees: [],
    loading: false,
    error: null
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    // perform async operation
    extraReducers: (builder) => {
        // get Employee
        builder.addCase(getEmployee.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getEmployee.fulfilled, (state, action) => {
            state.employees = action.payload
            state.loading = false
        })
        builder.addCase(getEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // post Employee
        builder.addCase(postEmployee.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(postEmployee.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(postEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // delete employee
        builder.addCase(DeleteEmployee.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(DeleteEmployee.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(DeleteEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // update employee
        builder.addCase(updateEmployee.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(updateEmployee.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(updateEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
   
})

export const { } = employeeSlice.actions
export default employeeSlice.reducer
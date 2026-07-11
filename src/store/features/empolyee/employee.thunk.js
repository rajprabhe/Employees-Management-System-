import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axiosInstance'

export const getEmployee = createAsyncThunk(
    // type --> employee slice name
    'employee/getEmployee',
    async (_, {rejectWithValue})=> {
        try {
            const response = await api.get('employee')
            // console.log(response)
            return response.data
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }    
    }
)

/**
 1) employee/getEmployee/pending
 2) employee/getEmployee/fullfilled
 3) employee/getEmployee/rejected
 */


export const postEmployee = createAsyncThunk(
    // type --> employee slice name
    'employee/postEmployee',
    async (details, {rejectWithValue, dispatch})=> {
        try {
            // details --> as a payload come you pass data
            const response = await api.post('employee', details)
            dispatch(getEmployee())
            // console.log(response)
            return response.data
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }    
    }
)


export const DeleteEmployee = createAsyncThunk(
    // type --> employee slice name
    'employee/DeleteEmployee',
    async (id, {rejectWithValue, dispatch})=> {
        try {
            // details --> as a payload come you pass data
            const response = await api.delete(`employee/${id}`)
            dispatch(getEmployee())
            // console.log(response)
            return response.data
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }    
    }
)


export const updateEmployee = createAsyncThunk(
    // type --> employee slice name
    'employee/updateEmployee',
    async ({id,details}, {rejectWithValue, dispatch})=> {
        try {
            // details --> as a payload come you pass data
            const response = await api.put(`employee/${id}`, details)
            dispatch(getEmployee())
            // console.log(response)
            return response.data
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }    
    }
)
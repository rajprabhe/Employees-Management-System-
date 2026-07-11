import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axiosInstance'

export const getEmployee = createAsyncThunk(
    // type --> employee slice name
    'employee/getEmployee',
    async ()=> {
        const response = await api.get('employee')
        console.log(response)
    }
)
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";4
import axiosInstance from "../../config/axiosInstance";
const initialState={
    role: localStorage.getItem("role") || "",
    data:localStorage.getItem("data")|| "",
    token:localStorage.getItem("token") || undefined,
    isLoggedIn:localStorage.getItem("auth") || false
}
const login=createAsyncThunk("/auth/login", async (data)=>{
    try {
        const response=await axiosInstance.post('/auth/signin',data);
        return response;
    } catch (error) {
        console.log(error)
    }
})
const authSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
      builder
       .addCase(login.fulfilled, (state,action)=>{
                    state.isLoggedIn=(action.payload.token !== undefined);
                    state.data=action.payload.userData
                    state.role=action.payload.userData?.userType;
                    state.token=action.payload.token;
                    localStorage.setItem("token",action.payload.token);
                    localStorage.setItem("data",action.payload.userData);
                    localStorage.setItem("role",action.payload.userData?.userType);
                    localStorage.setItem("auth",true);
               
       })
    }
});

export default authSlice.reducer;
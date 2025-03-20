import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";4
import axiosInstance from "../../config/axiosInstance";
const initialState={
    role: localStorage.getItem("role") || "",
    data:localStorage.getItem("data")|| "",
    token:localStorage.getItem("token") || undefined,
    isLoggedIn:localStorage.getItem("auth") || false
}
 export const login=createAsyncThunk("/auth/login", async (data)=>{
    console.log(data);
    try {
        const response=await axiosInstance.post('/auth/signin',data);
        console.log("res",response);
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
                    state.isLoggedIn=(action.payload.data?.token !== undefined);
                    state.data=action.payload.data?.userData
                    state.role=action.payload.data?.userData?.userType;
                    state.token=action.payload.data?.token;
                    localStorage.setItem("token",action.payload.data?.token);
                    localStorage.setItem("data",JSON.stringify(action.payload.data?.userData));
                    localStorage.setItem("role",action.payload.data?.userData?.userType);
                    localStorage.setItem("auth",true);
               
       })
    }
});

export default authSlice.reducer;
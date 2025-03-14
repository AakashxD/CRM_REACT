import { createSlice } from "@reduxjs/toolkit";4

const initialState={
    role: localStorage.getItem("role") || "",
    data:localStorage.getItem("data")|| {},
    isLoggedIn:localStorage.getItem("auth") || false
}
const authSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{

    }
});
export default authSlice.reducer;
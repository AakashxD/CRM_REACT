import { configureStore } from "@reduxjs/toolkit"
import AuthReducers from "../Reducers/Slice/AuthSlice"
const store=configureStore({
    reducer: AuthReducers,
    devTools:true,

})
export default store;

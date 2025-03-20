import { configureStore } from "@reduxjs/toolkit"
import AuthReducers from "../Reducers/Slice/AuthSlice"

const store=configureStore({
    reducer: AuthReducers,
    devTools:true,
// get default middleware 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  }),
})
export default store;

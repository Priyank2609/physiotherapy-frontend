import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/api.slice";
import userReducer from '../slices/user.slice'
import { formSlice } from "../slices/form.slice";




export const store=configureStore({
  reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
    [formSlice.reducerPath]:formSlice.reducer,
    userInfo:userReducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware,formSlice.middleware)
})
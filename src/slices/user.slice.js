import { createSlice } from "@reduxjs/toolkit";

const storedUserInfo = localStorage.getItem("userInfo");

const initialState = {
  userInfo: storedUserInfo && storedUserInfo !== "undefined"
    ? JSON.parse(storedUserInfo)
    : []
};


const userSlice=createSlice({
  name:'userInfo',
  initialState,
  reducers:{


  setCredentails:(state,action)=>{
   state.userInfo=action.payload
   localStorage.setItem("userInfo",JSON.stringify(state.userInfo))
    },
    logout:(state,action)=>{
   state.userInfo=[]
   localStorage.setItem("userInfo",JSON.stringify(state.userInfo))
    }
  },

  

})


export const {setCredentails,logout}=userSlice.actions


export default userSlice.reducer
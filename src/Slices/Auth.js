import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    signUpData : null,
    Loading : false
}



const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers:{
           
        settoken( state , action){
             state.token = action.payload
        },

        setSignUpData(state , action){
            state.signUpData = action.payload
        },

        setLoading(state , action){
            state.Loading = action.payload
        }

    }
})

export const {settoken , setSignUpData , setLoading} = authSlice.actions;
export default authSlice.reducer; 
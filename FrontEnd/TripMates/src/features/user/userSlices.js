import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeAccessTokenFromLocal, removeRefreshTokenFromLocal, removeUserFromLocal } from "../../utils/localstorage";

const initialState = {
    user : getUserFromLocal()
}

export const userSlice = createSlice({
    name : 'user' ,
    initialState ,
    reducers : {
        loginAction : (state , action) => {
            state.user = action.payload.user
        },
        logoutAction : (state) => {
            state.user = {}
            removeUserFromLocal()
            removeAccessTokenFromLocal()
            removeRefreshTokenFromLocal()
        },
        editUserAction: (state , action) => {
            state.user = action.payload.user
            console.log(state , action.payload);
        }
    }
})

export const {loginAction , logoutAction , editUserAction} = userSlice.actions


export default userSlice.reducer

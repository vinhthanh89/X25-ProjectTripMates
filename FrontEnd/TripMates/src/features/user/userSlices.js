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
        }
    }
})

export const {loginAction , logoutAction} = userSlice.actions


export default userSlice.reducer

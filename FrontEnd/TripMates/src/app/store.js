import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlices'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
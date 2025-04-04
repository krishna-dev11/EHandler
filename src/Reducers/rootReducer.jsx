import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '../Slices/Auth'
import profileReducer from '../Slices/Profile'

export const rootReducer = combineReducers({
    auth:authReducer,  
    profile:profileReducer,
})
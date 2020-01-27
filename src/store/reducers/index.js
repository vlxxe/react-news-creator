import { combineReducers } from "redux"
import { googleAuthReducer } from "./googleAuthReducer"

export const rootReducer = combineReducers({
  googleAuth: googleAuthReducer
})

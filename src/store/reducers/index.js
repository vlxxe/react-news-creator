import { combineReducers } from "redux"
import { googleAuthReducer } from "./googleAuthReducer"
import { cardsReducer } from "./cardsReducer"

export const rootReducer = combineReducers({
  googleAuth: googleAuthReducer,
  cards: cardsReducer
})

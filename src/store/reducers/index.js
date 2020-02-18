import { combineReducers } from "redux";
import { googleAuthReducer } from "./googleAuthReducer";
import { cardsReducer } from "./cardsReducer";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  googleAuth: googleAuthReducer,
  cards: cardsReducer,
  form: formReducer
});

import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./reducers"
import logger from "redux-logger"
import thunk from "react-thunk"

export const store = createStore(rootReducer, applyMiddleware(logger))

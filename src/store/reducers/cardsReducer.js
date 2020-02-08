import {
  ADD_CARD,
  LOADED_CARDS,
  LOAD_CARDS,
  CARD_CONTENT_LOADED,
  CARD_CONTENT_LOAD,
  CARD_DELETE
} from "../actions/cardsActions"

const initialState = {
  cardsList: [],
  cardContent: null,
  isLoading: false
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        ...state,
        isLoading: true
      }

    case LOADED_CARDS:
      return {
        ...state,
        cardsList: [...action.payload],
        isLoading: false
      }

    case ADD_CARD:
      return {
        ...state
      }

    case CARD_CONTENT_LOAD:
      return {
        ...state,
        cardContent: null
      }

    case CARD_CONTENT_LOADED:
      return {
        ...state,
        cardContent: action.payload
      }

    case CARD_DELETE:
      return {
        ...state
      }

    default:
      return state
  }
}

import { ADD_CARD, LOADED_CARDS, LOAD_CARDS } from "../actions/cardsActions"

const initialState = {
  cardsList: [],
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

    default:
      return state
  }
}

import {
  ADD_CARD,
  LOADED_CARDS,
  LOAD_CARDS,
  CARD_CONTENT_LOADED,
  CARD_CONTENT_LOAD,
  CARD_DELETE,
  CARD_EDIT_TEXT
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
      const arr = state.cardsList.filter(card => card.id !== action.payload)
      return {
        ...state,
        cardsList: [...arr]
      }

    case CARD_EDIT_TEXT:
      return {
        ...state,
        cardsList: state.cardsList.map(i => {
          if (i.id === action.payload.id) {
            return action.payload
          }
          return i
        })
      }

    default:
      return state
  }
}

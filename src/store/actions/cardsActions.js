import { Http } from "../../api/http"

export const ADD_CARD = "ADD_CARD"
export const LOAD_CARDS = "LOAD_CARDS"
export const LOADED_CARDS = "LOADED_CARDS"

const addCard = data => {
  return {
    type: ADD_CARD,
    payload: data
  }
}

export const fetchAddCard = data => {
  return async dispatch => {
    const response = await Http.post(
      "https://note-maker-28d08.firebaseio.com/cards.json",
      data
    )
    dispatch(addCard(response))
  }
}

const loadCards = () => {
  return {
    type: LOAD_CARDS
  }
}

const loadedCards = data => {
  return {
    type: LOADED_CARDS,
    payload: data
  }
}

export const fetchCards = () => {
  return async dispatch => {
    dispatch(loadCards())

    const response = await Http.get(
      "https://note-maker-28d08.firebaseio.com/cards.json"
    )
    let cards = []
    if (response !== null) {
      cards = Object.keys(response).map(key => ({
        ...response[key],
        id: key
      }))
    }

    dispatch(loadedCards(cards))
    console.log(cards)
  }
}

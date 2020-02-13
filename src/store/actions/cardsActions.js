import { Http } from "../../api/http"

export const ADD_CARD = "ADD_CARD"

export const LOAD_CARDS = "LOAD_CARDS"
export const LOADED_CARDS = "LOADED_CARDS"

export const CARD_CONTENT_LOAD = "CARD_CONTENT_LOAD"
export const CARD_CONTENT_LOADED = "CARD_CONTENT_LOADED"

export const CARD_DELETE = "CARD_DELETE"
export const CARD_EDIT_TEXT = "CARD_EDIT_TEXT"

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
  }
}

const cardContentLoad = () => {
  return {
    type: CARD_CONTENT_LOAD
  }
}

const cardContentLoaded = data => {
  return {
    type: CARD_CONTENT_LOADED,
    payload: data
  }
}

export const fetchCardContent = id => {
  return async dispatch => {
    dispatch(cardContentLoad())

    const response = await Http.get(
      `https://note-maker-28d08.firebaseio.com/cards/${id}.json`
    )

    dispatch(cardContentLoaded(response))
  }
}

const cardDelete = id => {
  return {
    type: CARD_DELETE,
    payload: id
  }
}

export const fetchCardDelete = id => {
  return async dispatch => {
    await Http.delete(
      `https://note-maker-28d08.firebaseio.com/cards/${id}.json`
    )

    dispatch(cardDelete(id))
  }
}

const cardEditText = card => {
  return {
    type: CARD_EDIT_TEXT,
    payload: card
  }
}

export const fetchCardEditText = (id, card) => {
  return async dispatch => {
    await Http.patch(
      `https://note-maker-28d08.firebaseio.com/cards/${id}.json`,
      card
    )

    dispatch(cardEditText(card))
  }
}

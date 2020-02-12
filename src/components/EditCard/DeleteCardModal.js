import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { fetchCardDelete } from "../../store/actions/cardsActions"

export const DeleteCardModal = ({ setShowModal, card }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteHandler = () => {
    setShowModal(false)
    history.push("/")
    dispatch(fetchCardDelete(card.id))
  }

  return (
    <div className="uk-modal uk-open" uk-modal="" style={{ display: "block" }}>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">Удаление записи</h2>
        <p>
          Вы точно хотите удалить запись <b>{card.title}</b>?
        </p>
        <p className="uk-text-right">
          <button
            onClick={() => setShowModal(false)}
            className="uk-button uk-button-default"
            type="button"
          >
            Отмена
          </button>
          <button
            onClick={deleteHandler}
            className="uk-button uk-button-danger"
            type="button"
          >
            Удалить
          </button>
        </p>
      </div>
    </div>
  )
}

import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

export const EditTextModal = ({ setShowModal, card }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  /* const deleteHandler = () => {
    setShowModal(false)
    history.push("/")
    dispatch(fetchCardDelete(cardId))
  } */

  return (
    <div className="uk-modal uk-open" uk-modal="" style={{ display: "block" }}>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">Изменение записи</h2>

        <div className="uk-margin">
          <input
            defaultValue={card.title}
            className="uk-input"
            type="text"
            placeholder="Заголовок новости"
          />
        </div>

        <div className="uk-margin">
          <textarea
            defaultValue={card.text}
            style={{ resize: "none" }}
            className="uk-textarea"
            rows="5"
            placeholder="Текст новости"
          ></textarea>
        </div>

        <p className="uk-text-right">
          <button
            onClick={() => setShowModal(false)}
            className="uk-button uk-button-default"
            type="button"
          >
            Отмена
          </button>
          <button className="uk-button uk-button-danger" type="button">
            Изменить
          </button>
        </p>
      </div>
    </div>
  )
}

import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchCardEditText } from "../../store/actions/cardsActions"

export const EditTextModal = ({ setShowModal, card }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const title = useRef(null)
  const text = useRef(null)

  const editTextHandler = () => {
    const titleValue = title.current.value.trim()
    const textValue = text.current.value.trim()

    if (titleValue.length === 0 || textValue.length === 0) {
      return
    }

    if (titleValue !== card.title || textValue !== card.text) {
      let cardEdited = { ...card }
      cardEdited.title = titleValue
      cardEdited.text = textValue

      history.push("/")
      dispatch(fetchCardEditText(card.id, cardEdited))
    }
    setShowModal(false)
  }

  return (
    <div className="uk-modal uk-open" uk-modal="" style={{ display: "block" }}>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">Изменить запись</h2>

        <div className="uk-margin">
          <input
            ref={title}
            defaultValue={card.title}
            className="uk-input"
            type="text"
            placeholder="Заголовок записи"
          />
        </div>

        <div className="uk-margin">
          <textarea
            ref={text}
            defaultValue={card.text}
            style={{ resize: "none" }}
            className="uk-textarea"
            rows="5"
            placeholder="Текст записи"
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
          <button
            onClick={() => editTextHandler()}
            className="uk-button uk-button-primary"
            type="button"
          >
            Изменить
          </button>
        </p>
      </div>
    </div>
  )
}

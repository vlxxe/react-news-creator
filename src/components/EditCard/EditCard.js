import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchCardDelete } from "../../store/actions/cardsActions"

export const EditCard = ({ cardAuthorId, cardTitle, cardId }) => {
  let history = useHistory()
  const dispatch = useDispatch()
  const userId = useSelector(state => state.googleAuth.userProfile.id)

  const [showModal, setShowModal] = useState(false)

  if (cardAuthorId !== userId) {
    return (
      <>
        <div style={{ position: "absolute", top: 5, right: 15 }}>
          <span
            style={{ marginRight: 5, cursor: "pointer" }}
            className="uk-icon-link"
            uk-icon="pencil"
          ></span>
          <span
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
            className="uk-icon-link"
            uk-icon="trash"
          ></span>
        </div>
        {showModal ? (
          <DeleteModal
            cardTitle={cardTitle}
            setShowModal={setShowModal}
            cardId={cardId}
          />
        ) : null}
      </>
    )
  } else {
    return null
  }
}

const DeleteModal = ({ cardTitle, setShowModal, cardId }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteHandler = () => {
    setShowModal(false)
    history.push("/")
    dispatch(fetchCardDelete(cardId))
  }

  return (
    <div className="uk-modal uk-open" uk-modal="" style={{ display: "block" }}>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">Удаление записи</h2>
        <p>
          Вы точно хотите удалить запись <b>{cardTitle}</b>?
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

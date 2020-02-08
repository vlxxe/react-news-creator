import React from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchCardDelete } from "../../store/actions/cardsActions"

export const EditCard = ({ cardAuthorId, cardTitle, cardId }) => {
  let history = useHistory()
  const dispatch = useDispatch()
  const userId = useSelector(state => state.googleAuth.userProfile.id)

  const deleteHandler = () => {
    dispatch(fetchCardDelete(cardId))
    history.push("/")
  }

  if (cardAuthorId === userId) {
    return (
      <>
        <div style={{ position: "absolute", top: 5, right: 15 }}>
          <span
            style={{ marginRight: 5, cursor: "pointer" }}
            className="uk-icon-link"
            uk-icon="pencil"
          ></span>
          <span
            style={{ cursor: "pointer" }}
            className="uk-icon-link"
            uk-icon="trash"
            uk-toggle="target: #modal-example"
          ></span>
        </div>

        <div id="modal-example" uk-modal="">
          <div className="uk-modal-dialog uk-modal-body">
            <h2 className="uk-modal-title">Удаление записи</h2>
            <p>
              Вы точно хотите удалить запись <b>{cardTitle}</b>?
            </p>
            <p className="uk-text-right">
              <button
                className="uk-button uk-button-default uk-modal-close"
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
      </>
    )
  }

  return null
}

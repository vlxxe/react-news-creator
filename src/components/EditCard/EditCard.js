import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { DeleteCardModal } from "./DeleteCardModal"
import { EditTextModal } from "./EditTextModal"

export const EditCard = ({ cardAuthorId, cardId }) => {
  const [showDeleteCardModal, setDeleteCardModal] = useState(false)
  const [showEditTextModal, setEditTextModal] = useState(false)

  let history = useHistory()
  const dispatch = useDispatch()

  const currentUserId = useSelector(state => state.googleAuth.userProfile.id)
  const selectedCard = useSelector(state =>
    state.cards.cardsList.filter(i => i.id === cardId)
  )
  const card = Object.assign({}, selectedCard[0])

  if (cardAuthorId !== currentUserId) {
    return (
      <>
        <div style={{ position: "absolute", top: 5, right: 15 }}>
          <span
            onClick={() => setEditTextModal(true)}
            style={{ marginRight: 5, cursor: "pointer" }}
            className="uk-icon-link"
            uk-icon="pencil"
          ></span>
          <span
            onClick={() => setDeleteCardModal(true)}
            style={{ cursor: "pointer" }}
            className="uk-icon-link"
            uk-icon="trash"
          ></span>
        </div>
        {showDeleteCardModal && (
          <DeleteCardModal setShowModal={setDeleteCardModal} card={card} />
        )}
        {showEditTextModal && (
          <EditTextModal setShowModal={setEditTextModal} card={card} />
        )}
      </>
    )
  } else {
    return null
  }
}

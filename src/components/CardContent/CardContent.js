import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchCardContent } from "../../store/actions/cardsActions"
import { EditCard } from "../EditCard/EditCard"

export const CardContent = ({ cardId }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCardContent(cardId))
  }, [cardId, dispatch])

  const cardContent = useSelector(state => state.cards.cardContent)

  if (cardContent === null) {
    return (
      <div>
        <h2>
          Загрузка <div uk-spinner=""></div>
        </h2>
      </div>
    )
  }

  return (
    <div className="uk-card uk-card-default">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={cardContent.profile.img}
              alt="user-pic"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {cardContent.title}
              <EditCard
                cardAuthorId={cardContent.profile.id}
                cardTitle={cardContent.title}
                cardId={cardId}
              />
            </h3>
            <div className="uk-flex uk-flex-between">
              <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">
                {cardContent.profile.name}
              </p>
              <span className="uk-text-meta">{cardContent.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>{cardContent.text}</p>
      </div>
    </div>
  )
}

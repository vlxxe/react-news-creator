import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCards } from "../../store/actions/cardsActions"
import { CardItem } from "../CardItem/CardItem"

export const CardList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  const cardsList = useSelector(state => state.cards.cardsList)
  const isLoading = useSelector(state => state.cards.isLoading)

  if (isLoading) {
    return (
      <div>
        <h2>
          Загрузка <div uk-spinner=""></div>
        </h2>
      </div>
    )
  }

  return (
    <div className="uk-flex uk-flex-wrap uk-flex-between">
      {cardsList.map(card => {
        return <CardItem card={card} key={card.id} />
      })}
    </div>
  )
}

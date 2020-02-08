import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAddCard } from "../../store/actions/cardsActions"

export const CreateCardForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const isLoggedIn = useSelector(state => state.googleAuth.isLoggedIn)
  const profile = useSelector(state => state.googleAuth.userProfile)

  const submitHandler = async e => {
    e.preventDefault()

    const d = new Date()
    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    const card = {
      date: `${day}/${month}/${year}`,
      title,
      text,
      profile
    }
    console.log(card)
    dispatch(fetchAddCard(card))
    setTitle("")
    setText("")
  }

  const changeHandler = e => {
    const placeholder = e.target.placeholder
    const value = e.target.value
    if (placeholder === "Заголовок новости") {
      setTitle(() => value)
    } else {
      setText(() => value)
    }
  }

  if (!isLoggedIn) {
    return <h2>Необходимо авторизоваться для создания новости!</h2>
  }

  return (
    <div>
      <form style={{ maxWidth: 700 }} onSubmit={submitHandler}>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Форма создания новости</legend>

          <div className="uk-margin">
            <input
              value={title}
              onChange={changeHandler}
              className="uk-input"
              type="text"
              placeholder="Заголовок новости"
            />
          </div>

          <div className="uk-margin">
            <textarea
              value={text}
              onChange={changeHandler}
              style={{ resize: "none" }}
              className="uk-textarea"
              rows="5"
              placeholder="Текст новости"
            ></textarea>
          </div>
          <button className="uk-button uk-button-primary" type="submit">
            Создать новость
          </button>
        </fieldset>
      </form>
    </div>
  )
}

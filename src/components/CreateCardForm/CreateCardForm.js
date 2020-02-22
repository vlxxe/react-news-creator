import React from "react"
import { reset } from "redux-form"
import { Field, reduxForm } from "redux-form"
import { useDispatch } from "react-redux"
import { fetchAddCard } from "../../store/actions/cardsActions"
import {
  required,
  maxLength40,
  maxLength300,
  minLength10
} from "../../utils/validators"
import { Input, Textarea } from "../CustomsForm/CustomForms"

export const CreateCardForm = ({ userProfile }) => {
  const dispatch = useDispatch()

  const onSubmit = async data => {
    const d = new Date()
    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()

    const card = {
      date: `${day}/${month}/${year}`,
      title: data.title,
      text: data.text,
      profile: userProfile
    }

    dispatch(fetchAddCard(card))
    dispatch(reset("createCard"))

    window.UIkit.notification({
      message: "<span uk-icon='icon: check'></span> Запись создана",
      status: "success",
      pos: "bottom-right"
    })
  }

  return <CreateCardReduxForm onSubmit={onSubmit} />
}

let CreateCardReduxForm = props => {
  const { handleSubmit } = props

  return (
    <form style={{ maxWidth: 700 }} onSubmit={handleSubmit}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Форма создания записи</legend>

        <div className="uk-margin">
          <Field
            className="uk-input"
            name="title"
            component={Input}
            type="text"
            placeholder="Заголовок записи"
            validate={[required, maxLength40, minLength10]}
          />
        </div>

        <div className="uk-margin">
          <Field
            style={{ resize: "none" }}
            className="uk-textarea"
            rows="5"
            name="text"
            component={Textarea}
            placeholder="Текст записи"
            validate={[required, maxLength300, minLength10]}
          />
        </div>
        <button className="uk-button uk-button-primary" type="submit">
          Создать запись
        </button>
      </fieldset>
    </form>
  )
}

CreateCardReduxForm = reduxForm({
  form: "createCard"
})(CreateCardReduxForm)

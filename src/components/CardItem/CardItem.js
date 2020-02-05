import React from "react"

export const CardItem = ({ card }) => {
  return (
    <div
      className="uk-card uk-card-default"
      style={{ display: "block", width: 580, marginBottom: 15 }}
      key={card.id}
    >
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={card.profile.img}
              alt="user-pic"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {card.title}
            </h3>
            <div className="uk-flex uk-flex-between">
              <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">
                {card.profile.name}
              </p>
              <span className="uk-text-meta">{card.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>{card.text}</p>
      </div>
    </div>
  )
}

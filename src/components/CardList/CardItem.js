import React from "react";
import { NavLink } from "react-router-dom";
import { EditCard } from "../EditCard/EditCard";

export const CardItem = ({ card }) => {
  return (
    <div
      className="uk-card uk-card-default"
      style={{ width: 580, marginBottom: 15 }}
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
              <NavLink to={`/card/${card.id}`}>{card.title}</NavLink>
              <EditCard cardAuthorId={card.profile.id} cardId={card.id} />
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
        <p>
          {card.text.length > 200
            ? card.text.substring(0, 200) + "..."
            : card.text}
        </p>
      </div>
    </div>
  );
};

import React from "react";

import { CardItem } from "./CardItem";

export const CardList = ({ cardsList }) => {
  return (
    <div className="uk-flex uk-flex-wrap uk-flex-between">
      {cardsList.map(card => {
        return <CardItem card={card} key={card.id} />;
      })}
    </div>
  );
};

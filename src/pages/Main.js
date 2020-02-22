import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCards } from "../utils/selectors";

import { CardList } from "../components/CardList/CardList";
import { fetchCards } from "../store/actions/cardsActions";

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const cardsList = useSelector(selectAllCards);
  const isLoading = useSelector(state => state.cards.isLoading);

  return (
    <>
      <h2>Список записей</h2>
      {isLoading && (
        <div>
          <h2>
            Загрузка <div uk-spinner=""></div>
          </h2>
        </div>
      )}
      {cardsList && <CardList cardsList={cardsList} />}
    </>
  );
};

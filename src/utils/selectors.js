import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash";

const selectCardList = state => state.cards.cardsList;
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const selectAllCards = createDeepEqualSelector(
  selectCardList,
  allCards => allCards
);

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

export let emptyStore = mockStore({
  googleAuth: {
    userProfile: {
      id: null,
      name: null,
      img: null
    }
  },
  cards: {
    cardsList: [],
    cardContent: null,
    isLoading: false
  }
});

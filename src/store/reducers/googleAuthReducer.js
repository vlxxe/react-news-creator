import {
  GOOGLE_REQUEST_SIGN_IN,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_OUT
} from "../actions/googleAuthActions"

const initialState = {
  userProfile: {
    id: null,
    name: null,
    img: null
  },
  isLoading: false,
  isLoggedIn: false
}

export const googleAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_REQUEST_SIGN_IN:
      return {
        ...state,
        isLoading: true
      }

    case GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        userProfile: { ...action.payload },
        isLoading: false,
        isLoggedIn: true
      }

    case GOOGLE_SIGN_OUT:
      return {
        ...state,
        userProfile: {
          id: null,
          name: null,
          img: null
        },
        isLoading: false,
        isLoggedIn: false
      }

    default:
      return state
  }
}

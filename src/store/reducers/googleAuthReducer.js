import {
  GOOGLE_PROFILE_SIGN_IN,
  GOOGLE_PROFILE_SIGN_OUT
} from "../actions/googleAuthActions"

const initialState = {
  profile: {
    id: null,
    name: null,
    img: null
  }
}

export const googleAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_PROFILE_SIGN_IN:
      return {
        ...state,
        profile: { ...action.payload }
      }

    case GOOGLE_PROFILE_SIGN_OUT:
      return {
        ...state,
        profile: {
          id: null,
          name: null,
          img: null
        }
      }

    default:
      return state
  }
}

import { GoogleApi } from "../../api/googleApi"

export const GOOGLE_REQUEST_SIGN_IN = "GOOGLE_REQUEST_SIGN_IN"
export const GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS"
export const GOOGLE_SIGN_OUT = "GOOGLE_SIGN_OUT"

export const googleSignOut = () => {
  return async dispatch => {
    await GoogleApi.signOut()
    dispatch({
      type: GOOGLE_SIGN_OUT
    })
  }
}

export const googleRequestSignIn = () => {
  return async dispatch => {
    dispatch({ type: GOOGLE_REQUEST_SIGN_IN })

    const response = await GoogleApi.signIn()

    if (!response.error) {
      dispatch(googleeSignInSuccess(response))
    } else {
      dispatch(googleSignOut())
    }
  }
}

export const googleeSignInSuccess = profile => {
  return {
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: profile
  }
}

export const GOOGLE_PROFILE_SIGN_IN = "GOOGLE_PROFILE_SIGN_IN"
export const GOOGLE_PROFILE_SIGN_OUT = "GOOGLE_PROFILE_SIGN_OUT"

export const googleProfileSignIn = profile => {
  return {
    type: GOOGLE_PROFILE_SIGN_IN,
    payload: profile
  }
}

export const googleProfileSignOut = () => {
  return {
    type: GOOGLE_PROFILE_SIGN_OUT
  }
}

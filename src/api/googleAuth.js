import { useDispatch } from "react-redux"
import {
  googleProfileSignIn,
  googleProfileSignOut
} from "../store/actions/googleAuthActions"

export default class GoogleAuth {
  dispatch = useDispatch()

  init = () => {
    window.gapi.load("auth2", function() {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        })
        .then(
          () => console.log("init ok"),
          e => console.log("init error", e)
        )
    })
  }

  signIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()

    const authOk = googleUser => {
      const data = googleUser.getBasicProfile()
      const profile = {
        id: data.getId(),
        name: data.getName(),
        img: data.getImageUrl()
      }
      this.dispatch(googleProfileSignIn(profile))
    }
    const authErr = () => console.log("auth error")

    GoogleAuth.signIn({
      scope: "profile email"
    }).then(authOk, authErr)
  }

  signOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    const singOutOk = () => {
      this.dispatch(googleProfileSignOut())
    }
    const singOutErr = () => console.log("sign out error")

    GoogleAuth.signOut().then(singOutOk, singOutErr)
  }
}

export default class GoogleAuth {
  init() {
    window.gapi.load("auth2", function() {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
        })
        .then(
          () => {},
          error => console.log("init error", error)
        )
    })
  }

  async signIn() {
    const googleAuth = await window.gapi.auth2

    const profile = await googleAuth.getAuthInstance().then(GoogleAuth =>
      GoogleAuth.signIn()
        .then(async googleUser => {
          const data = await googleUser.getBasicProfile()
          const dataObj = {
            id: data.getId(),
            name: data.getName(),
            img: data.getImageUrl()
          }
          return dataObj
        })
        .catch(e => e)
    )
    return profile
  }

  async signOut() {
    const googleAuth = window.gapi.auth2.getAuthInstance()
    googleAuth.signOut().catch(error => error)
  }
}

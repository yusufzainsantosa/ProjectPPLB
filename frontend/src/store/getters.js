const getters = {
  loggedIn (state) {
    return state.accessToken != null
  }
}

export default getters

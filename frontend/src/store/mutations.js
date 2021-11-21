const mutations = {
  UPDATE_LOCAL_STORAGE (state, { access, refresh }) {
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
    state.accessToken = access
    state.refreshToken = refresh
  },
  UPDATE_ACCESS (state, access) {
    state.accessToken = access
  },
  DESTROY_TOKEN (state) {
    state.accessToken = null
    state.refreshToken = null
  }
}

export default mutations

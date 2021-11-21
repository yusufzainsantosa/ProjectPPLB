const state = {
  accessToken: localStorage.getItem('access_token') || null, // makes sure the user is logged in even after
  // refreshing the page
  refreshToken: localStorage.getItem('refresh_token') || null,
  APIData: '' // received data from the backend API is stored here.
}

export default state

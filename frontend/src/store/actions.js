import axios from '@/axios'

const actions = {
  // run the below action to get a new access token on expiration
  refreshToken (context) {
    return new Promise((resolve, reject) => {
      axios.post('/api/token/refresh/', {
        refresh: context.state.refreshToken
      }) // send the stored refresh token to the backend API
        .then(response => { // if API sends back new access and refresh token update the store
          console.log('New access successfully generated')
          context.commit('UPDATE_ACCESS', response.data.access)
          resolve(response.data.access)
        })
        .catch(err => {
          console.log('error in refreshToken Task')
          reject(err) // error generating new access and refresh token because refresh token has expired
        })
    })
  },
  registerUser (context, data) {
    return new Promise((resolve, reject) => {
      axios.post('/register/', {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
        confirm: data.confirm
      })
        .then(response => {
          console.log('register success')
          resolve(response)
        })
        .catch(error => {
          console.log('register error')
          reject(error)
        })
    })
  },
  logoutUser (context) {
    if (context.getters.loggedIn) {
      return new Promise((resolve) => {
        axios.post('/api/token/logout/')
          .then((response) => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            context.commit('DESTROY_TOKEN')
            resolve(response)
          })
          .catch(err => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            context.commit('DESTROY_TOKEN')
            resolve(err)
          })
      })
    }
  },
  loginUser (context, credentials) {
    return new Promise((resolve, reject) => {
      // send the username and password to the backend API:
      axios.post('/api/token/', {
        username: credentials.username,
        password: credentials.password
      })
      // if successful update local storage:
        .then(response => {
          context.commit('UPDATE_LOCAL_STORAGE', { access: response.data.access, refresh: response.data.refresh }) // store the access and refresh token in localstorage
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default actions

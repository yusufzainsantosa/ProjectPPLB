import Vue from 'vue'

// axios
import axios from 'axios'
import store from './store/store'

const URL =  `${process.env.VUE_APP_BACKEND_URI}`;
const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: `${URL}`,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

axiosIns.interceptors.response.use(undefined, function (err) {
  const originalRequest = err.config
  // if error response status is 401, it means the request was invalid due to expired access token
  if (err.config && err.response && err.response.status === 401) {
    store.dispatch('refreshToken') // attempt to obtain new access token by running 'refreshToken' action
      .then(() => {
        // if successful re-send the request to get the data from server
        return axios(originalRequest)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
})

Vue.prototype.$http = axiosIns

export default axiosIns

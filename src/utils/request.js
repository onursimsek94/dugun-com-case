import axios from 'axios'
import store from '@/store'
import { i18n } from '@/plugins/vue-i18n'

const DUGUN = axios.create({
  baseURL: process.env.VUE_APP_DUGUN_COM_API,
  headers: {},
})

const requestInterceptors = [
  [
    function (config) {
      store.commit('increaseLoading')
      config.headers.common['accept-language'] = i18n.locale
      return config
    },
    function (error) {
      return Promise.reject(error)
    },
  ],
]

const responseInterceptors = [
  [
    function (response) {
      store.commit('decreaseLoading')
      return response
    },
    function (error) {
      return Promise.reject(error)
    },
  ],
]

requestInterceptors.forEach(interceptor => {
  DUGUN.interceptors.request.use(...interceptor)
})

responseInterceptors.forEach(interceptor => {
  DUGUN.interceptors.response.use(...interceptor)
})

export {
  DUGUN,
}

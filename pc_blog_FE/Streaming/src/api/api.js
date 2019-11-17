import fetch from './http.js';
export default {
  login(params) {
    return fetch('post', '/api/user/login', params)
  },
  reg(params) {
    return fetch('post', '/api/user/reg', params)
  }
}
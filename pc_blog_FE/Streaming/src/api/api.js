import fetch from './http.js';
export default{
    login(params){
      return fetch('post','/api/login',params)
    },
    reg(params){
      return fetch('get','/reg',params)
    }
}
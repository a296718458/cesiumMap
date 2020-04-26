import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';


// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = '';
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    if(token) {
      config.params = {'token':token}
    }
    return config
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode === 2) {
      console.log('error',2)
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * get
 * @export
 * @param {*} url
 * @param {*} [params={}]
 * @returns {Promise}
 */
export function get(url,params={}) {
    axios.get(url,{
      params: params
    })
}

/**
 * post
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns {Promise}
 */
export function post(url,data={}) {
  return new Promise((resolve,reject) => {
    axios.post(url,data)
         .then(response => {
           resolve(response);
         },err => {
           reject(err);
         })
  }) 
}

/**
 * post2
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns {Promise}
 */
export function post2(url,data={}) {
    return axios.post(url,data)
}

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
    axios.patch(url,data)
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
    axios.put(url,data)
}

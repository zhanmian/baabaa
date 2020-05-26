import axios from "axios";
import { Loading, Message } from 'element-ui';

let loadingInstance = null;

// 创建axios实例，在这里可以设置请求的默认配置
const instance = axios.create({  
    // 设置超时时间10s  
    timeout: 10000, 
    //根据自己配置的反向代理去设置不同环境的baseUrl
    baseURL: "http://api.straysheep.monster"
    // process.env.NODE_ENV === 'production' ? '' : '/api'
})

// 统一设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 一些常见的http状态码信息
let httpCode = {        
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 将token加进请求头
  config.headers['token'] = localStorage.getItem('token') || '';
  // 发起请求时加载全局loading，请求失败或有响应时会关闭
  loadingInstance = Loading.service({       
    spinner: 'el-icon-loading',
    text: '加载中...'
  })
  // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
  // if (config.url.includes('pur/contract/export')) {
  //   config.headers['responseType'] = 'blob'
  // }
  // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
  // if (config.url.includes('pur/contract/upload')) {
  //   config.headers['Content-Type'] = 'multipart/form-data'
  // }
  return config
  }, error=> {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  loadingInstance.close()
  if (response.data.code === 100 || response.data.code === "") {
    return response
  } else {
    Message({
      message: response.data.message,
      type: 'error'
    })
    return response
  }
}, error => {
  loadingInstance.close()
  if (error.response) {     
    // 根据请求失败的http状态码去给用户相应的提示
    let tips = error.response.code in httpCode ? httpCode[error.response.code] : error.response.data.message
    Message({
      message: tips,
      type: 'error'
    })
    return Promise.reject(error)
  } else {
    Message({
      message: '请求超时, 请刷新重试',
      type: 'error'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})

// 统一封装get请求
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url,
        params,
        ...config
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

// 统一封装post请求
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url,
        data,
        ...config
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
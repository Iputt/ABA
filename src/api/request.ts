/*
 * @Description: axio请求配置
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 */
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  headers: {}
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(config => {
  //修改请求头配置

  return config;
}, error => {
  return Promise.reject(error);
})

/**
 * 响应拦截
 */
instance.interceptors.response.use(response => {
  const code = response.status;
  if(code === 200) {
    return Promise.resolve(response);
  }else {
    return Promise.reject(response);
  }
  return response;
}, error => {
  const code = error.response.stauts;
  switch(code) {
    case 401:
      console.log('未授权');
      break;
    case 404:
      console.log('未找到页面');
      break;
    case 500:
      console.log('服务器错误');
      break;
    default:
      console.log(code);
  }
  return Promise.reject(error)
})

/**
 * get请求
 * @param{String} url [请求地址] 
 * @param{Object} params [请求参数] 
 * @returns 
 */
export const Get = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}

/**
 * post请求
 * @param{String} url [请求地址] 
 * @param{Object} params [请求参数] 
 * @returns 
 */
export const Post = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    instance.post(url, {
      params
    }).then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}

/**
 * put请求
 * @param{String} url [请求地址] 
 * @param{Object} params [请求参数] 
 * @returns 
 */
export const Put = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    instance.put(url, {
      params
    }).then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}

/**
 * patch请求
 * @param{String} url [请求地址] 
 * @param{Object} params [请求参数] 
 * @returns 
 */
export const Patch = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    instance.patch(url, {
      params
    }).then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}

/**
 * delete请求
 * @param{String} url [请求地址] 
 * @param{Object} params [请求参数] 
 * @returns 
 */
export const Delete = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      params
    }).then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}
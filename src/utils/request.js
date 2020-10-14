import axios from 'axios';
import {message} from 'antd';

// 超时时间
axios.defaults.timeout = 20000;

//axios默认请求地址
// axios.defaults.baseURL='http://192.168.16.30:10005';

// http请求拦截器
axios.interceptors.request.use(config => {

  //设置请求头
  config.headers['Authorization']=`Bearer ${sessionStorage.getItem('USER_TOKEN')}`;

  return config
}, error => {
  message.error('加载超时');
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  return data
}, error => {
  message.error('加载失败');
  return Promise.reject(error)
})

const request=(options)=>{
  return new Promise((resolve,reject)=>{
    axios({
      url:`${options.baseUrl || '/ymy'}${options.url}`,
      method:options.method || "GET",
      params:options.params || "",
      data:options.data || ""
    }).then(res=>{
      if(res.data.code===200){
        const token=res.data.newToken;
        // 缓存TOKEN
        token && sessionStorage.setItem("USER_TOKEN",token)
        resolve(res.data);
      }else{
        console.log("reject")
        message.error(res.data.msg);
        reject(res.data)
      }

    })
  })
}

export default request;

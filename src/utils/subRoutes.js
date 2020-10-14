import React from 'react'
import { Route,Redirect } from 'dva/router';
import {ConfigProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { connect } from 'dva';
import dynamic from 'dva/dynamic';
import NoMatch from '../components/noMatch';
// 多重路由嵌套写法改进

// 动态加载组件
const dynamicCom=(app,models,component,routes,isAuthority)=>dynamic({
  app,
  model:()=> models,
  component:()=>
    component().then(res=>{
      const Component=res.default || res;
      return props => 
      <ConfigProvider locale={zh_CN}>
        <Component {...props} app={app} routes={routes} />
      </ConfigProvider>
    })

})

function subRoutes({routes,component,app,model,isAuthority}) {
  
  return (
    <Route component={dynamicCom(
      app,
      model,
      component,
      routes,
      isAuthority
    )}
    />
  )
};

// 封装路由重定向 ---默认加载第一个路由
export function RedirectRoute({routes,from,exact}){
  return <Redirect exact={exact} to={routes[0].path} from={from} />
}

// 404报错页面
export function NoMatchRoute({status=404}){
  return <Route render={props=><NoMatch {...props} status={status}/>} />
}


export default connect()(subRoutes)

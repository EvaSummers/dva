
# dva-demo
dva + dva-loading + redux-actions + react-router-redux + axios ajax请求实例

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

## 目录及约定
├── mock/                          // mock 文件所在目录，基于 express
├── public/                        // 编译后文件夹  
└── src/                           // 总资源
    ├── assets/                    // 公共资源图片及公用样式
    ├── components/                // 公用组件--一般建议为纯组件 pureComponent
    ├── services/                  // 数据接口
    ├── models/                    // 状态管理处理数据和逻辑                 
        ├── global.js              // 各页面状态管理js
        ├── index.js               // 
        ├── other.js               // 
    └── utils/                     // 公共函数处理 
        ├── common.js              // 公共通用函数
        ├── request.js             // 请求文件
        ├── router.js              // 主路由
        ├── subRoutes.js           // 专门处理路由的方法-动态加载路由
    ├── pages/                     //  页面部分
        ├── Login/                 //  登录相关
        ├── System/                //  系统
        └── Index.jsx              //  系统入口
    ├── index.js                   //  工程主入口
    ├── router.js                  //  路由主入口
    └── index.scss                 //  公共样式入口
├── .editorconfig                  // 
├── .eslintrc                      // 
├── .gitignore                     // 
├── .roadhogrc.mock.js             // roadhog dev 支持 mock 功能
├── .webpackrc.js                  // roadhog配置文件
└── package-lock.json              // 
└── package.json                   // 
└── README.md                      // 解释文件

#### 总结体会
- dva是个框架，并不是库，简单理解：dva = React-Router + Redux + Redux-saga
- 实际功能模块的开发，就是 配置路由 + UI Component + Model + connect
- 知识点包括action、reducers、effects等概念的理解和他们之间的联系，以及subscriptions、connect等。
- model模块导入，统一入口，使用webpack require.context 技术。
- app = dva(opts)，对dva实例，可配置属性，如：initialState、history、onAction、extraReducers、onEffect等的学习。
- dva-loading插件、redux-logger中间件、redux-actions库、react-router-redux库等的运用；
- 路由跳转方式的总结，包括react跳转方法，和在effects中运用react-router-redux库的push方法进行跳转等。
- axios ajax请求实例，简单的体会dva开发一个功能模块的大体流程。

#### 可参照链接
- [dva github地址](https://github.com/dvajs/dva)
- [dva官网](https://dvajs.com/)
- [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading)
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) 
- [redux-actions](https://github.com/redux-utilities/redux-actions)
- [webpack require.context](https://webpack.js.org/guides/dependency-management/#context-module-api)
- https://blog.csdn.net/wx1035589113/article/details/108110869
- https://dvajs.com/guide/introduce-class.tml#react-%E6%B2%A1%E6%9C%89%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98
- [简书]：https://www.jianshu.com/p/f7401adce447  
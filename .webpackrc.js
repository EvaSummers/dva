const path = require('path');
export default {
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
  ],
  alias: {
    'assets': path.resolve('./src/assets'),
    '@':path.resolve('./src')
  },
  // publicPath: '/',
  "env":{},
  // 跨域代理
  // proxy: {
  //   "/ymy": {
  //     "target": "http://192.168.7.10:8071/ymy",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/ymy" : "" }
  //   }
  // },
  // "disableCSSModules":true  //cssModules
};

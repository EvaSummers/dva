// 主工程入口
import dva from 'dva';
import './index.scss';
import { createBrowserHistory as createHistory } from 'history';

// 1. Initialize
const app = dva({
    history: createHistory(),
});

// 2. Plugins 插件
// app.use({});

// 3. Model 轮询引用
require('./models').default.forEach(key => app.model(require(`./models/${key}`).default))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

// Warning: 
// Please use `require("history").createHashHistory` instead of `require("history/createHashHistory")`. 
// Support for the latter will be removed in the next major release.

import React from 'react';
import { connect } from 'dva';

// 引入路由 只会运行其中一个 <route>
// 子元素只能是 <route> 或者 <redirect>;/
import { Switch } from 'dva/router';
import SubRouter, { RedirectRoute,NoMatchRoute } from '../utils/subRoutes'

function IndexPage(props) { 
  const {routes,app}=props;
  return (
    <Switch>
        {
          routes.map((route, i) => (
            <SubRouter key={i} {...route} app={app} />
          ))
        }
        {/* 重定向 */}
        <RedirectRoute exact={true} from={'/login'} routes={routes} />
        {/* 输入的链接不存在时,跳转到NoMatch组件中 */}
        <NoMatchRoute />
    </Switch>
  );
}

IndexPage.propTypes = {};

export default connect(({global})=>global)(IndexPage);

//  model 的概念把一个领域的模型管理起来，
//  包含同步更新 state 的 reducers，
//  处理异步逻辑的 effects，
//  订阅数据源的 subscriptions
import { routerRedux } from 'dva/router';
export default {
  namespace: 'login',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  // 异步状态值
  effects: {
    // 路由跳转
    *redirect ({ payload }, { put }) {
      yield put(routerRedux.push('/home'));
    },
  },
  //同步修改状态值
  reducers: {},

};

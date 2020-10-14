
export default {

  namespace: 'global',

  state: {
    name:"dva",
    breadcrumb:[]
    // autoH: window.innerHeight,//获取屏幕高度
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *setName({ payload }, { put }) {  // eslint-disable-line  状态机
      yield put({ type: 'set_name', payload});
    },
  },

  reducers: {
    set_name(state, { payload }) {
      return { ...state, name:payload };
    },
  },

};

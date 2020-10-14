
export default {

    namespace: 'other',
  
    state: {
      name:"other"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *setName({ payload }, { put }) {  // eslint-disable-line
        yield put({ type: 'set_name', payload});
      },
    },
  
    reducers: {
      set_name(state, { payload }) {
        return { ...state, name:payload };
      },
    },
  
  };
  
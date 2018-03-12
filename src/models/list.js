import * as listService from '../services/listService'


export default {
  namespace:"list",
  state:{
    list:[]
  },
  reducers:{
    save(state,{payload:{data}}){
      state.list = data;
      return{...state}
    },
    removeItem(state,{index}){
      console.log(index);
      state.list.splice(index,1);
      return{...state}
    },
  },
  effects:{
    *fetch(payload,{call,put}){
      const data = yield call(listService.fetchList);
      yield put({type:'save',payload:{data}})
    },

/*    *removeItem(payload,{call,put}){
      console.log(payload);
      const index = payload.index;
      yield put({type:'save1',payload:{index}})

    }*/
  },
  subscriptions:{
    setup({dispatch}){
      dispatch({type:'fetch'})
    }
  }
}

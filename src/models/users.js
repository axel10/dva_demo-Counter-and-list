import * as userService from '../services/userService'

export default {
  namespace: "users",
  state: {
    list:[]
  },
  reducers: {        //用来修改数据模型的state。
    save(state, {payload:{data}}) {   //涉及到es6的拆包写法。
      state.list = data;
      return {...state}
    },
    removeItem(state, {item}) {
      state.list = state.list.filter(function (lItem) {
        return item.id !== lItem.id
      });
      return{...state}
    }
  },

  effects: {           //effects指的是涉及到异步请求的方法。通常用来调用服务获取数据。
    * fetch(payload,{put, call}) {
      const data = yield call(userService.fatchData);
      yield put({type: "save", payload: data})
    },

    * fetchRemoveItem({item},{put,call}){
      const result = yield call(userService.fetchRemoveItem,item.id);
      if (result){
        console.log(true);
        yield put({type:"removeItem",item})
      }else{
        console.log(false);
      }
    }

  },

  subscriptions: {              //触发器。setup表示初始化即调用。其他用法见官方文档。https://github.com/sorrycc/blog/issues/62
    setup({dispatch}) {
      dispatch({type: 'fetch'})
    }
  }

}

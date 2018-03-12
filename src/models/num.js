
export default {
  namespace:'num',
  state:0,
  reducers:{
    'add'(state){
      state++;
      return state
    }
  }
}

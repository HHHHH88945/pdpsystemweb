import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    alex:"alex111",
  },
  getters:{
    dosomething(state){
      debugger;
      axios.post('/admin/mission/checkPdpById',{
        "userId":1,
        "userName":"admin"
        })
      .then(res => {
        debugger;
        console.info(res)
        // console.log(response.data.resultSetData); // 打印获取到的数据
        // commit('SET_MISSION_DATA', response.data.resultSetData)
      }).catch(res=>{
        debugger;
        console.info(res);
      }).finally(res=>{
        debugger;
        console.info(res);
      })
    },
  },
  mutations:{
    // setAlex(state,data){
    //   state.alex = data
    // }
  },
  actions:{},
  modules:{}

})

// this.$store.state.alex
// this.$store.commit("setAlex","sdfsadjflajsdfsadf");

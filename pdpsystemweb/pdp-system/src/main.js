import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import TDesign from 'tdesign-vue'
import 'tdesign-vue/es/style/index.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'
import 'handsontable/dist/handsontable.full.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'
import axios from "axios";
Vue.use(ElementUI);
Vue.use(Vuesax, {
  // options here
});
Vue.use(TDesign);
Vue.use(Antd);
/* eslint-disable no-new */
Vue.config.productionTip = false

//请求拦截器
axios.interceptors.request.use((config) => {
    //在发送之前做点什么
    return config
}, (error) => {
    //对请求错误做点什么
    return error
})

//响应拦截器
axios.interceptors.response.use((response) => {
    if (response.status === 200 ) {
    return response.data
} else if (response.status === 401 ){
    router.push("/login");
}else if (response.status === 403 ){
    router.push("/login");
}
})
//导出
//定义全局的vue变量
Vue.prototype.axios=axios;
Vue.prototype.$message = ElementUI.Message;

//定义全局的vue方法
Vue.prototype.showMessage=function(message,type){
    this.$message({message: message,type: type});
}

//全局的post请求
Vue.prototype.alexPost=function(url,params,success){
    let headerParams={
        headers:{
            "token":localStorage.getItem("token")||''
        }
    }
    this.axios.post(url,params,headerParams).then(success).catch(err => {
        if(err.response.status=='401'){
        router.push("/login")
    }
    console.log(err)
});
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
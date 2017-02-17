/**
 * Created by stev on 2017/2/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        showapi_appid:29545,
        showapi_sign:'c1f0d56a3e4c4417b1c61f5ba4c04e28'
    },

    getters:{
        showapi_appid:state=>state.showapi_appid,
        showapi_sign:state=>state.showapi_sign
    },
    mutations:{
        //getApiUrlId:(state,url)=>{
        //    state.showapi_appid=url;
        //},
        //getApiUrlSign:(state,sign)=>{
        //    state.showapi_sign=url;
        //}
    }
})
export default store

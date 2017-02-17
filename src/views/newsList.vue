<template>
    <div class="news-list row">
        <div class="col-md-12" style="padding-left: 0;padding-right: 0">
            <p style="color:#666565">{{channelTitle}}</p>
            <div>
                <loading v-show="loading"></loading>
            </div>
            <b-card style="border: none">
                <b-list-group>
                    <b-list-group-item v-for="newslList in newslLists">
                        <div class="col-md-12">
                            <a class="no-mb" v-bind:href="newslList.link">{{newslList.title}}</a>  <!--属性中不要用{{}}-->
                        </div>
                    </b-list-group-item>

                </b-list-group>
            </b-card>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import loading from '../components/loading.vue'
    export default {
        name: 'newsList',
        data () {
            return {
                newsApi:'http://route.showapi.com/109-35',
                page:'10',
                newslLists:[],
                loading:false,
                channelTitle:''
            }
        },
        computed: {
                ...mapGetters(['showapi_appid','showapi_sign'])  //取 sore.js里面的值，相当于全局变量
        },
        watch:{
            '$route'(to,from){
                if(to.name=='newsList'){
                    this.newslLists=[];
                    this.getList();
                }
            }
        },
        methods:{
            getList(){
                let _this=this;
                this.channelTitle=this.$route.params.channelName;
                //请求发送前 拦截器
                this.axios.interceptors.request.use(function (config) {
                    // Do something before request is sent
                    _this.loading=true;  //打开loading动画
                    return config;
                }, function (error) {
                    // Do something with request error
                    return Promise.reject(error);
                });
                this.axios.get(''+_this.newsApi+'?showapi_appid='+this.showapi_appid+'&showapi_sign='+this.showapi_sign+'&channelId='+this.$route.params.id+'&page='+_this.page+'')
                        .then(function(response){
                            _this.newslLists=response.data.showapi_res_body.pagebean.contentlist;  //
                        })
                        .catch(function(error){

                        })
            }
        },
        mounted(){
            this.getList();
        },
        components:{loading}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
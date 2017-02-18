<template>

    <div class="swiper-container swiper-container-horizontal" style="margin-top: 0" id="swiper-container2">
        <ul class="nav-ul swiper-wrapper">

            <li class="nav-ul-li swiper-slide menu">
                <router-link :to="{ name:'index'}">首页</router-link>
            </li>

            <router-link class="nav-ul-li swiper-slide menu" v-for="channel in channelList" :to="{ name:'newsList',params:{id:channel.channelId,channelName:channel.name}}" tag="li">
                <!--<li class="nav-ul-li swiper-slide">
                    {{channel.name}}
                </li>-->
                {{channel.name}}
            </router-link>
        </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                listApi:'http://route.showapi.com/109-34',
                channelList:[]
            }
        },
        computed: {
                ...mapGetters(['showapi_appid','showapi_sign'])  //取 sore.js里面的值，相当于全局变量
        },
        methods:{
            getThemes(){
                let _this=this;
                //发送请求

                this.axios.get(''+_this.listApi+'?showapi_appid='+this.showapi_appid+'&showapi_sign='+this.showapi_sign+'')
                        .then(function(response){
                            // 返回正确的回调
                            _this.channelList=response.data.showapi_res_body.channelList;  //
                            _this.$nextTick(function () {   //异步执行 DOM 更新。只要观察到数据变化，执行相应的动作
                                //alert('更新完成')
                                var mySwiper2 = new Swiper('#swiper-container2',{
                                    slidesPerColumn: 2,
                                    slidesPerView : 'auto',
                                    slidesPerGroup : 1
                                    //autoplay : 500,

                                });
                            })

                        })
                        .catch(function (error) {
                            console.log(error);
                        });


            }
        },
        mounted(){
            this.getThemes();
        }
    }
</script>
<style scoped>
    .swiper-container {
        width: 100%;
        height: 100%;
        border:solid 1px #ddd;
        margin-bottom: 1rem;
    }
    .nav-ul {
        font-size: 16px;
        white-space: nowrap;
        float: left;
        width: auto;
        transition: all 0.3s;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    .nav-ul .nav-ul-li {
        line-height: 40px;
        display: inline-block;
        padding: 0 10px;
        width: auto;
    }
    .menu{font-size: 18px;}
</style>
<template>
    <div class="index">
        <p style="color:#666565">这是首页</p>
        <p>请点击栏目获取新闻标题</p>
        <!--<div class="swiper-container" id="swiper-container">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg" alt="首页banner图片01">
                </div>
                <div class="swiper-slide">
                    <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026905031.jpg" alt="首页banner图片02">
                </div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            &lt;!&ndash; 如果需要分页器 &ndash;&gt;
            <div class="swiper-pagination"></div>

            &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>-->
    </div>
</template>

<script>
    import Swiper from '../../static/swiper/swiper.min.js'
    import '../../static/swiper/swiper.min.css'
    export default {
        name: 'index',
        data () {
            return {
                //msg: '这真的是首页'
            }
        },
        mounted(){
            /*var mySwiper = new Swiper('#swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            })*/
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .swiper-container{
        width: 100%;
        height: auto;
    }
</style>

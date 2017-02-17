<template>
    <div class="detail">
        <p>新闻详情页</p>
        <div class="detail-box">
            <div class="title">
                <h1>这是新闻标题</h1>
                <p class="source">来源：<span class="source-text">来自哪里</span><span  class="time">2014-5-2</span></p>
            </div>
            <div class="detail-img">

            </div>
            <div class="detail-content">
                <p>
                    这是新闻详情
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'newsDetail',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<template>
  <div id="app" class="container">
    <!--<img src="./assets/logo.png">-->
    <commonHeader></commonHeader>
    <div class="container main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import commonHeader from './components/commonHeader.vue'
export default {
  name: 'app',
  components:{
    commonHeader
  }
}
</script>

<style>
  *{margin:0;padding:0}
  html {
    height: 100%;
  }
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 20px;;
}
a:active,a:focus{color: red !important;}
  .my-active{color: red}
  .no-mb{margin-bottom: 0}
</style>

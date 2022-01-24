<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components:{
    ToolBar,
  },
  methods : {
    fetchData(){
      console.log('fetchData');
    }
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
/* router transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

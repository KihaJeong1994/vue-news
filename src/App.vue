<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  methods: {
    fetchData() {
      console.log("fetchData");
    },
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on("start::spinner", this.startSpinner);
    bus.$on("end::spinner", this.endSpinner);
  },
  beforeDestroy() {
    // 컴포넌트 역할 끝나면 event를 off해줘야한다
    bus.$off("start::spinner", this.startSpinner);
    bus.$off("end::spinner", this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* router transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

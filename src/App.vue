<template>
  <div id="app">
    <div id="header">
      <Header></Header>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
  data() {
    return {
      transitionName: "slide-left"
    };
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
}
</style>

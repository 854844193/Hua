<template>
  <div id="app">
    <!-- <router-link to="/adminLogin">管理员登陆界面</router-link> -->

    <!-- <router-link to="/adminmain">管理员主界面</router-link> -->
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>


<style >
* {
  margin: 0;
  padding: 0;
}
</style>

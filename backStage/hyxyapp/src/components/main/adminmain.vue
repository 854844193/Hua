<template>
  <div class="adminmain">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <span>{{user}}</span>
          <button @click="loginname">an</button>
        </el-breadcrumb>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "小虎"
    };
  },
  create() {
    this.loginname();
  },
  methods: {
    loginname() {
      console.log(this.$route.query.id);
      let url = "/loginname";
      this.axios
        .get(url, params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
.adminmain {
  width: 100%;
}
/* 头部样式 */
.el-header {
  background-color: #eff2f7;
  color: #333;
  line-height: 0px;
}
.el-header > .el-breadcrumb {
  line-height: 4;
}
</style>
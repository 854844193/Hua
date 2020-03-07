<template>
  <div class="adminmain">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <span>欢迎你！！！管理员 {{user}}</span>
          <button class="btn" @click="clickbtn">退出登陆</button>
          <span>
            <el-avatar :src="aimg"></el-avatar>
          </span>
        </el-breadcrumb>
      </el-header>
      <el-main class="main">
        <h2 style="text-align:center">欢迎你管理员：{{user}}</h2>
        <h1>你的权限{{name}}</h1>
        <ul>
          <li>可以修改用户数据</li>
          <li>可以删除用户数据</li>
          <li>可以添加用户数据</li>
          <li>对商品的也一样</li>
        </ul>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aimg: localStorage.getItem("aimg"),
      user: localStorage.getItem("username")
    };
  },
  methods: {
    clickbtn() {
      this.$router.push({ path: "/adminLogin" });
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
.btn {
  margin: 10px;
}
.main {
  background-color: #e9eef3;
  color: rgb(29, 27, 27);
  text-align: left;
  height: 70vh;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -100px;
  margin-top: -100px;
  line-height: 60px;
}
</style>
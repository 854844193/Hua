<template>
  <div class="slef">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator="/" style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
          <span>欢迎你！！！管理员 {{name}}</span>
          <button class="btn" @click="clickbtn">退出登陆</button>
          <span>
            <el-avatar :src="aimg"></el-avatar>
          </span>
        </el-breadcrumb>
      </el-header>
      <el-main class="slefmain">
        <h2 style="text-align:center">管理员信息</h2>
        <h1>姓名：{{name}}</h1>
        <h1>管理员权限：{{limits}}</h1>
        <h1>管理员id：{{id}}</h1>
        <h1>管理员头像：</h1>
        <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
        <!-- <img src="" alt=""> -->
        <div style="height:35px">
          <img :src="aimg" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aimg: localStorage.getItem("aimg"),
      name: localStorage.getItem("username"),
      limits: "管理员",
      id: localStorage.getItem("id"),

      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false
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
.slef {
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
.slefmain {
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
<template>
  <div class="adminbox">
    <el-container style="height: 640px; border: 1px solid #eee">
      <!-- 左侧导航栏 -->
      <el-aside width="200px" style="background-color:#324157">
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/admin/adminmain">
            <i class="el-icon-menu"></i>
            <span slot="title">后台管理系统</span>
          </el-menu-item>
          <el-submenu index="1" class="sub">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="/admin/dataman">用户列表</el-menu-item>
            <el-menu-item index="/admin/shoplist">商品列表</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="/admin/slef">
            <i class="el-icon-setting"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 面包屑   -->
      <router-view></router-view>
    </el-container>
  </div>
</template>
<style>
/* .el-header {
  background-color: #eff2f7;
  color: #333;
}
.el-header > .el-breadcrumb {
  line-height: 4;
} */
.element.style {
  background-color: red;
}
.el-aside {
  color: #333;
}
.el-table th {
  color: black;
  background-color: #eff2f7;
}
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
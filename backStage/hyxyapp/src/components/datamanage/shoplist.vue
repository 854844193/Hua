<template>
  <div class="shoplist">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator="/" style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">数据管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">商品列表</a>
          </el-breadcrumb-item>
          <span>王小虎</span>
        </el-breadcrumb>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shoplist {
  width: 100%;
}
.el-header {
  background-color: #eff2f7;
  color: #333;
  line-height: 0px;
}
.el-header > .el-breadcrumb {
  line-height: 4;
}
</style>
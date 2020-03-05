<template>
  <div class="slef">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
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
</style>
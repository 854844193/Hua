<template>
  <div class="adminedit">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator="/" style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">数据管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">用户编辑</a>
          </el-breadcrumb-item>
          <span>欢迎你！！！管理员 {{username}}</span>
          <button class="btn" @click="clickbtn">退出登陆</button>
          <span>
            <el-avatar :src="aimg"></el-avatar>
          </span>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
          <el-form-item label="姓名" style="width:400px">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" style="width:400px">
            <el-input v-model="formLabelAlign.passwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="subbtn">提交</el-button>
            <el-button @click="rebtn">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aimg: localStorage.getItem("aimg"),
      tableData: [],
      username: localStorage.getItem("username"),
      labelPosition: "right",
      formLabelAlign: {
        id: this.$route.query.id,
        name: this.$route.query.name,
        passwd: this.$route.query.passwd
      }
    };
  },
  mounted() {
    // console.log(this.$route.query);
  },
  methods: {
    clickbtn() {
      this.$router.push({ path: "/adminLogin" });
    },
    //重置按钮
    rebtn() {
      let mes = this.formLabelAlign;
      (mes.id = ""), (mes.name = ""), (mes.passwd = "");
    },
    //提交按钮
    subbtn() {
      let url = "/adminedit";
      this.axios
        .get(url, {
          params: {
            uid: this.formLabelAlign.id,
            uname: this.formLabelAlign.name,
            upwd: this.formLabelAlign.passwd
          }
        })
        .then(res => {
          console.log(res);
          this.$router.push({ path: "admin/userlist" });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
.adminedit {
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
.btn {
  margin: 10px;
}
</style>
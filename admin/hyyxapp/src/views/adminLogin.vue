<template>
  <div class="login">
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>话语馨苑管理员登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
                @keydown.enter="doLogin"
              ></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "沈威",
        password: "123"
      }
    };
  },
  methods: {
    change() {},
    doLogin() {
      const url = "/adminLogin";
      // alert(JSON.stringify(this.user));
      //可以直接把this.user对象传给后端进行校验用户名和密码
      this.axios
        .post(url, this.user)
        .then(res => {
          console.log(res.data.result);
          console.log(img);
          let id = res.data.result.gid;
          let gname = res.data.result.username;
          let img = res.data.result.aimg;
          let code = res.data.code;
          if (code == 1) {
            alert("成功");
            localStorage.setItem("username", gname);
            localStorage.setItem("aimg", img);
            localStorage.setItem("id", id);
            this.$router.push({
              path: "/admin/adminmain",
              query: { id: id, username: gname }
            });
          } else {
            alert(res.data.Msg);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
<style >
</style>

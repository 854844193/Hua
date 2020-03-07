<template>
  <div class="datamain">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator="/" style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">数据管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">用户列表</a>
          </el-breadcrumb-item>
          <span>欢迎你！！！管理员 {{username}}</span>
          <button class="btn" @click="clickbtn">退出登陆</button>
          <span>
            <el-avatar :src="aimg"></el-avatar>
          </span>
        </el-breadcrumb>
      </el-header>
    </el-container>
    <!-- 内容 -->
    <el-main>
      <el-table :data="tableData" class="tb" height="500" style="width:100%">
        <el-table-column prop="uname" label="姓名" width="120"></el-table-column>
        <el-table-column prop="upwd" label="密码" width="120"></el-table-column>
        <el-table-column prop="uimg" label="用户头像" width="280">
          <template scope="scope">
            <img :src="scope.row.uimg" width="100" height="100" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      tableData: [],
      username: localStorage.getItem("username"),
      aimg: localStorage.getItem("aimg")
    };
  },

  methods: {
    clickbtn() {
      this.$router.push({ path: "/adminLogin" });
    },
    //编辑按钮
    handleEdit(index, row) {
      // console.log(index, row);
      this.$router.push({
        path: "/admin/adminEdit",
        query: { id: row.uid, name: row.uname, passwd: row.upwd }
      });
    },
    //删除按钮
    handleDelete(index, row) {
      let msg = "确定删除？数据将永久删除";
      if (confirm(msg) == true) {
        let url = "/delinfo";
        this.axios
          .get(url, {
            params: {
              id: row.uid
            }
          })
          .then(res => {
            if (res.data.code == 1) {
              this.reload();
            }
            console.log(res.data.code);
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        return false;
      }
    }
  },
  //打开页面就请求加载数据
  mounted() {
    let url = "/getinfo";
    // let name = this.res.data.uname;
    this.axios
      .get(url)
      .then(res => {
        console.log(res.data);
        console.log(this.tableData);
        let _this = this;
        _this.tableData = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style>
.datamain {
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
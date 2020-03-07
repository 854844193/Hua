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
          <span>欢迎你！！！管理员 {{username}}</span>
          <button class="btn" @click="clickbtn">退出登陆</button>
          <span>
            <el-avatar :src="aimg"></el-avatar>
          </span>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <el-table :data="tableData" style="width: 100% " height="500" class="tb">
          <el-table-column prop="sname" label="产品名称" width="140"></el-table-column>
          <el-table-column prop="simg" label="产品图片" width="140">
            <template scope="scope">
              <img :src="scope.row.simg" width="100" height="100" />
            </template>
          </el-table-column>
          <el-table-column prop="bfprice" label="原价" width="140"></el-table-column>
          <el-table-column prop="afprice" label="折扣价格" width="140"></el-table-column>
          <el-table-column prop="sinfo" label="商品描述" width="140"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      // images: "",
      aimg: localStorage.getItem("aimg"),
      tableData: [],
      username: localStorage.getItem("username")
    };
  },
  methods: {
    clickbtn() {
      this.$router.push({ path: "/adminLogin" });
    },
    //编辑按钮
    handleEdit(index, row) {
      // console.log(this.tableData);
      this.$router.push({
        path: "/admin/editshop",
        query: {
          id: row.sid,
          name: row.sname,
          simg: row.simg,
          bfprice: row.bfprice,
          afprice: row.afprice,
          sinfo: row.sinfo
        }
      });
    },
    //删除按钮
    handleDelete(index, row) {
      let msg = "确定删除？数据将永久删除";
      if (confirm(msg) == true) {
        let url = "/getShop/delshop";
        this.axios
          .get(url, {
            params: {
              id: row.sid
            }
          })
          .then(res => {
            if (res.data.code == 1) {
              alert("删除成功");
              this.reload();
            }
            // console.log(res.data.code);
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        return false;
      }
    }
  },
  //打开页面请求到数据
  mounted() {
    let url = "/getShop";
    this.axios
      .get(url)
      .then(res => {
        console.log();
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
.btn {
  margin: 10px;
}
</style>
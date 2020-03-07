<template>
  <div class="adminedit">
    <el-container>
      <el-header style="height:50px;text-align: right; font-size: 12px">
        <el-breadcrumb separator="/" style="font-size:17px line-height=4 !">
          <el-breadcrumb-item :to="{ path: '/' }">后台管理系统首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">添加商品</a>
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
          <el-form-item label="产品" style="width:400px">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <!-- 图片上传 -->
          <el-form-item label="产品图片" prop="simg">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:8081/uploads"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <!--  -->
          <el-form-item label="原价" style="width:400px">
            <el-input v-model="formLabelAlign.bfprice"></el-input>
          </el-form-item>
          <el-form-item label="折扣价格" style="width:400px">
            <el-input v-model="formLabelAlign.afprice"></el-input>
          </el-form-item>
          <el-form-item label="商品描述" style="width:400px">
            <el-input v-model="formLabelAlign.sinfo"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="addbtn" style="color:white; background-color:#78AAFF">添加</el-button>
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
      imageUrl: "",
      username: localStorage.getItem("username"),
      labelPosition: "right",
      formLabelAlign: {
        id: "",
        name: "",
        simg: "",
        bfprice: "",
        afprice: "",
        sinfo: ""
      }
    };
  },
  methods: {
    addbtn() {
      let url = "/getShop/addshop";
      this.axios
        .get(url, {
          params: {
            sname: this.formLabelAlign.name,
            simg: this.formLabelAlign.simg,
            bfprice: this.formLabelAlign.bfprice,
            afprice: this.formLabelAlign.afprice,
            sinfo: this.formLabelAlign.sinfo
          }
        })
        .then(res => {
          console.log(res);
          alert("添加成功");
          this.$router.push({ path: "/admin/shoplist" });
        })
        .catch(err => {
          console.error(err);
        });
    },
    clickbtn() {
      this.$router.push({ path: "/adminLogin" });
    },
    //图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res, file);
      this.formLabelAlign.simg = res.src;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style >
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
/* //图片上传 */

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
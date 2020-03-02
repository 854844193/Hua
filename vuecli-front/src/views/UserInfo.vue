<template>
  <div class="Uinfo">
    <br />
    <div class="ava">
      <img :src="uavatar" alt="用户头像" />
    </div>
    <br />
    <hr />
    <div class="Uitems">
      <div>用&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;名：{{username}}</div>

      <div>用户电话：{{utel}}</div>

      <div>用户签名：{{uauto}}</div>
    </div>
  </div>
</template>

<script>
import Uimg from "../../public/img/uimg.jpg";
export default {
  data: function() {
    return {
      //   username: localStorage.getItem("username"),
      //   utel: localStorage.getItem("utel"),
      //   uavatar: localStorage.getItem("uavatar"),
      //   uauto: localStorage.getItem("uauto")
      username: "渣渣辉",
      utel: "12345676542",
      uavatar: Uimg,
      uauto: "高处不胜寒！！！"
    };
  }
};
</script>

<style>
.Uinfo {
  width: 400px;
  height: 600px;
  margin: 0 auto;
}
.ava {
  width: 60px;
  height: 60px;
  border: 1px solid grey;
  border-radius: 50%;
  margin: auto;
}
.ava > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.Uitems {
  width: 400px;
  text-align: left;
}
.Uitems div{
    margin: 10px 40px;
}
</style>
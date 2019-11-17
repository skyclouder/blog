<template>
  <div class="box">
    <div class="container">
      <div class="left">
        <div>流影</div>
        <div>发现</div>
        <div>关注</div>
        <div>消息</div>
      </div>
      <div class="center">
        <el-input placeholder="请输入名称" suffix-icon="el-icon-search"></el-input>
      </div>
      <div class="right">
        <div>换肤</div>
        <div class="setting">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item,index) in setting" :key="index">{{item}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>写文章</div>
      </div>
    </div>
  </div>
</template>

<script>
import comService from "../api/api";
export default {
  name: "toptitile",
  data() {
    return {
      setting: ["我的主页", "收藏的文章", "喜欢的文章", "设置", "帮助", "退出"],
      isActive: true,
      formLabelAlign: {
        name: "",
        email: "",
        pass: ""
      }
    };
  },
  mounted() {},
  methods: {},
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box input.el-input__inner {
  border-radius: 35px !important;
}
.box i.el-input__icon.el-icon-search {
  cursor: pointer;
}
</style>
<style  scoped>
.box {
  height: 100%;
  width: 100%;
  background: #f1f1f1; 
  background: white; 
}
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

.container {
  height: 58px;
  display: flex;
  align-items: center;
}
.left {
  width: 30%;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: space;
  flex-wrap: nowrap;
  align-content: center;
  position: relative;
}
.left div {
  flex: 1;
}
.center {
  flex: 1;
  background-color: purple;
}

.right {
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-content: center;
  position: relative;
}
.right div {
  flex: 1;
}
</style>

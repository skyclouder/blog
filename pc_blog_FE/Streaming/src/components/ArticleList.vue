<template>
  <el-row>
    <el-col :span="16">
      <div class="articleContent">
        <a class="title">彻底了解浏览器强缓存和协商缓存，这一篇就够了</a>
        <p
          class="abstract"
        >什么是浏览器缓存 浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器..</p>
        <div class="meta">
          <span>昵称</span>
          <span>评论</span>
          <span>收藏</span>
        </div>
      </div>
      <div class="articleContent">
        <a class="title">彻底了解浏览器强缓存和协商缓存，这一篇就够了</a>
        <p
          class="abstract"
        >什么是浏览器缓存 浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器..</p>
        <div class="meta">
          <span>昵称</span>
          <span>评论</span>
          <span>收藏</span>
        </div>
      </div>
      <div class="articleContent">
        <a class="title">彻底了解浏览器强缓存和协商缓存，这一篇就够了</a>
        <p
          class="abstract"
        >什么是浏览器缓存 浏览器缓存(Brower Caching)是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器..</p>
        <div class="meta">
          <span>昵称</span>
          <span>评论</span>
          <span>收藏</span>
        </div>
      </div>
    </el-col>

    <el-col :span="8">5555</el-col>
  </el-row>
</template>

<script>
import comService from "../api/api";
export default {
  name: "articleList",
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

<style  scoped>
.articleContent {
  padding: 15px 0px;
  position: relative;
  width: 625px;
  left: 15%;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}
.abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}
.title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
</style>

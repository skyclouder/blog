<template>
  <div class="bg">
      <div class="toptitile">
        <toptitile/>
        <articlList/>
      </div>
  </div>
</template>

<script>
import comService from "../api/api";
import toptitile from "./Titile";
import articlList from "./ArticleList";
export default {
  name: "Home",
  components: {
    "toptitile":toptitile,
    "articlList":articlList
  },
  data() {
   
    return {
      labelPosition: "right",
      isActive: true,
      formLabelAlign: {
        name: "",
        email: "",
        pass: ""
      },

    };
  },
  mounted() {
   
  },
  methods: {
    
   
  },
  updated() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  height: 100%;
  width: 100%;
  /* background: #f1f1f1; */
}
</style>

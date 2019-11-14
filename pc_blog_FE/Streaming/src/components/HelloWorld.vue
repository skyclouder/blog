<template>
  <div class="regAndLog">
    <div class="titleImg">
      <img src="../assets/titles.png" />
    </div>
    <div class="formDiv">
      <el-form
        :label-position="labelPosition"
        :rules="rules"
        label-width="80px"
        :model="formLabelAlign"
        ref="formLabelAlign"
      >
        <div class="title">
          <span v-bind:class="{ active: !isActive }" style="cursor:pointer" @click="changePage">登陆</span>
          <span>.</span>
          <span v-bind:class="{ active: isActive }" style="cursor:pointer" @click="changePage">注册</span>
        </div>
        <el-form-item label="名称" prop="name">
          <i class="el-icon-user"></i>
          <el-input v-model="formLabelAlign.name" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
          v-bind:style="{ display: isActive=== true? 'block':'none' }"
        >
          <i class="el-icon-message"></i>
          <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <i class="el-icon-lock"></i>
          <el-input type="password" v-model="formLabelAlign.pass" placeholder="6位以上包含数字和字母"></el-input>
        </el-form-item>
      </el-form>
      <div style="padding-left: 40px">
        <el-button
          v-if="isActive"
          type="success"
          style="width:100%"
          @click="submitForm('formLabelAlign')"
        >注册</el-button>
        <el-button v-else type="primary" style="width:100%" @click="login">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import comService from '../api/api'
export default {
  name: "RigAndLog",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入6位包含数字和字母的密码"));
        }
      }
    };
    let validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱地址"));
        }
      }
    };
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      isActive: true,
      formLabelAlign: {
        name: "",
        email: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  mounted() {
    let inputArr = document.querySelectorAll(".el-input__inner");
    for (let i of inputArr) {
      i.style.paddingLeft = "30px";
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.$data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs.formLabelAlign.resetFields();
    },
    login() {
      let params = {
        username: "zmq",
        pws: "sss",
        email: "ddd"
      };
      comService.login(params).then(data => {
        console.log(data);
      });
    },
    changePage() {
      this.$data.isActive = !this.$data.isActive;
      this.$refs.formLabelAlign.resetFields();
    }
  },
  updated() {
    console.log("更新")
    let inputArr = document.querySelectorAll(".el-input__inner");
    for (let i of inputArr) {
      i.style.paddingLeft = "30px";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formDiv {
  width: 400px;
  margin: 160px auto 0;
  padding: 50px 50px 30px 0px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
  background-color: #d1fdff; /* 浏览器不支持时显示 */
  background-image: linear-gradient(#fddb92, #d1fdff);
}
i {
  height: 91%;
  width: 30px;
  position: absolute;
  top: -1px;
  left: 1px;
  z-index: 9999;
  font-size: 20px;
  display: inline-block;
  line-height: 42px;
}
.regAndLog {
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}
.active {
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
.title {
  position: relative;
  top: -15px;
}
.titleImg {
  position: absolute;
  top: 45px;
  left: 15px;
  min-width: 950px;
}
.titleImg img {
  width: 100%;
}
</style>

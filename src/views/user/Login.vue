<template>
  <div class="container">
    <br>
    <div class="card" style="width: 30rem;">
      <div class="card-header bg-dark text-light text">
        <i class="fas fa-file-alt"></i>
        Login
      </div>

      <div class="card-body">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px">
          <el-form-item label="Email" prop="email">
            <el-input type="Email" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the email"));
      } else {
        if (this.ruleForm.email !== "") {
        }
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.password !== "") {
        }
        callback();
      }
    };

    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [{ required: true, validator: validateEmail, trigger: "blur" }],
        password: [{ required: true, validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      const email = this.ruleForm.email;
      const password = this.ruleForm.password;
      if (email && password) {
        this.$store.dispatch("user/login", {
          email,
          password
        });
      }
    }
  }
};
</script>


<style scoped>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
}

i {
  margin-right: 10px;
}
</style>
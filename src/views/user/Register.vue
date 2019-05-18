<template>
  <div class="container">
    <br>
    <div class="card" style="width: 50rem;">
      <div class="card-header bg-dark text-light text">
        <i class="fas fa-file-alt"></i>
        Register
      </div>

      <div class="card-body">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px">
          
          <el-form-item label="Username" prop="username">
            <el-input type="Username" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input type="Email" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Register</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import UserAPI from "@/api/User";

export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the username"));
      } else {
        if (this.ruleForm.username !== "") {
        }
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        email: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [{ required: true, validator: validateUserName, trigger: "blur" }],
        email: [
              { required: true, message: 'Please input email address', trigger: 'blur' },
              { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
            ],
        password: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [{ required: true, validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.register();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    async register() {
      let username = this.ruleForm.username;
      let email = this.ruleForm.email;
      let password = this.ruleForm.password;

      const payload = {
        username: username,
        email: email,
        password: password
      };

      const res = await UserAPI.register(payload);

      if (res.data) {
        console.log("register success", res.data);
        this.$store.dispatch("user/login", {
          username,
          password
        });
      } else {
        console.log("Fail", res.err);
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
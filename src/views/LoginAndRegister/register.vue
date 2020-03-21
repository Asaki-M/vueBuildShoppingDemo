<template>
	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="register_form">
	  <el-form-item label="用户名" prop="name">
	    <el-input v-model="ruleForm.name"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="pass">
	    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item label="确认密码" prop="checkPass">
	    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item class="btn_register_contain">
	    <el-button size="medium" type="primary" @click="submitForm('ruleForm')" class="register_btn">注册</el-button>
	    <el-button size="medium" @click="resetForm('ruleForm')" class="register_btn">重置</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
	export default {
	    data() {
	      var checkName = (rule, value, callback) => {
	        if (value === '') {
	         callback(new Error('用户名不能为空'));
	        }
	      };
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      return {
	        ruleForm: {
	          pass: '',
	          checkPass: '',
	          name: ''
	        },
	        rules: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          checkPass: [
	            { validator: validatePass2, trigger: 'blur' }
	          ],
	          name: [
	            { validator: checkName, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {   //拿到接口再利用 axios 做post请求
	            window.navigate('user_area.html')
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	  }
</script>

<style scoped="scoped">
	.register_form{
		padding: 20px 10px;
		padding-right: 50px;
	}
	.btn_register_contain{
		text-align: center;
		padding-right: 40px;
	}
	.register_btn{
		width: 40%;
		height: 40px;
		margin: 20px auto;
	}
</style>

<template>
	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="loginForm">
	  <el-form-item label="用户名" prop="name">
	    <el-input v-model="ruleForm.name"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="pass">
	    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
	  </el-form-item>
	  <el-form-item class="btn_contain">
	    <el-button size="medium" type="primary" @click="submitForm('ruleForm')" class="login_btn">立即登录</el-button>
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
	      return {
	        ruleForm: {
	          pass: '',
	          name: ''
	        },
	        rules: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
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
	          if (valid) { //拿到接口再利用 axios 做post请求
	            console.log('success login')
				window.navigate('user_area.html')
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      }
	    }
	  }
</script>

<style scoped="scoped">
	.loginForm {
		padding: 50px 10px;
		padding-right: 50px;
	}
	.btn_contain{
		padding-right: 40px;
	}
	.login_btn{
		display: block;
		width: 60%;
		height: 40px;
		margin: 40px auto;
	}
</style>

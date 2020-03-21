<template>
  <div class="address">
	  <h2 class="new_address">新增地址</h2>
	  <my-form class="address_form"></my-form>
	  <el-button type="primary" round class="form-btn" @click="saveData">保存</el-button>
	  <h2 class="table_title">已有地址</h2>
	  <table class="address_table" cellpadding="50px">
		  <tr class="table_header">
			  <th class="table_margin">收货人姓名</th>
			  <th class="table_margin">收货人地址</th>
			  <th class="table_margin">收货人手机</th>
			  <th class="table_margin">操作</th>
		  </tr>
		  <tr v-for="(item,index) in addressList" class="table_content">
			  <td class="table_margin">{{item.name}}</td>
			  <td class="table_margin">{{item.addr}}</td>
			  <td class="table_margin">{{item.tel}}</td>
			  <td class="table_margin table_operation">
				   <el-link type="primary" @click="dialog = true">修改</el-link>
				   <el-link type="danger" @click="deleteData(index)">删除</el-link>
			  </td>
		  </tr>
	  </table>
	  <el-drawer
	    :before-close="handleClose"
	    :visible.sync="dialog"
	    direction="ltr"
	    custom-class="demo-drawer"
	    ref="drawer"
	    >
	    <div class="demo-drawer__content">
	      <my-form></my-form>
	      <div class="my-drawer__footer">
	        <el-button type="primary" @click="saveData()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
	        <el-button @click="cancelForm">取 消</el-button>
	      </div>
	    </div>
	  </el-drawer>

  </div>
</template>

<script>
	import address from '../../assets/city.js'
	import form from './form.vue'
	export default{
		data(){
			return {
				addressList:[{
					name:'asaki',
					addr:'yao yuan de yuan fang',
					tel:'12345678910'
				},{
					name:'aaa',
					addr:'yao yuan de yuan fang',
					tel:'12345678910'
				}],
				dialog: false,
				loading: false,
				form: {
					
				},
				formLabelWidth: '80px',
				timer: null
			}
		},
		methods:{
			handleClose(done) {
				if (this.loading) {
					return;
				}
				this.$confirm('确定要提交表单吗？')
					.then(_ => {
						this.loading = true;
						this.timer = setTimeout(() => {
							done();
							// 动画关闭需要一定的时间
							setTimeout(() => {
								this.loading = false;
							}, 400);
						}, 2000);
					}).catch(_ => {});
			},
			cancelForm() {
			  this.loading = false;
			  this.dialog = false;
			  clearTimeout(this.timer);
			},
			deleteData(index){  // 删除数组中的地址，到后期传入后端删除数据库中数据
				this.addressList.splice(index,1)
			},
			saveData(){
				// 获取表单数据，可以通过axios发送请求到后端
				let formData = form.data().form
				console.log(formData)
			}
		},
		components:{
			'my-form':form
		}
	}
</script>

<style scoped="scoped">
	.address{
		width: 100%;
		box-shadow: 0 0 10px #ccc;
		padding: 20px 10px;
	}
	.form-btn{
		width: 150px;
		margin-left: 100px;
	}
	.new_address{
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #606266;
		padding: 10px 20px;
		font-size: 24px;
		border-bottom: 1px dotted #ccc;
	}
	.table_title{
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #606266;
		padding: 50px 20px 10px;
		font-size: 24px;
		border-bottom: 1px dotted #ccc;
	}
	.address_form,
	.address_table{
		margin-top: 20px;
	}
	.address_table{
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #606266;
		width: 100%;
		text-align: center;
	}
	.address_table>.table_header{
		color: #909399;
		font-size: 18px;
	}
	.address_table th,
	.address_table td{
		padding: 20px;
	}
	.address_table>tr{
		border-bottom: 1px solid #ebeef5;
	}
	.address_table .table_content:hover{
		background-color: #f5f7fa;
	}
	.address_table .table_operation{
		padding-left: 5px;
	}
	.address_table .table_operation a:first-of-type{
		padding-right: 5px;
	}
	.my-drawer__footer{
		padding-left: 100px;
	}
</style>

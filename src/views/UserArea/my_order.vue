<template>
	<el-container class="order_area">
	  <el-header>
		  <el-row>
		    <el-col :span="12">
				<el-row>
					<el-col :span="6">
						<el-avatar :size="100" :src="circleUrl"></el-avatar>
					</el-col>
					<el-col :span="12" class="self_info">
						<div class="username">Asaki</div>
						<a href="" class="change_self">修改个人信息<i class="el-icon-arrow-right"></i></a>
					</el-col>
				</el-row>
			</el-col>
		    <el-col :span="12" class="user_info">
				<p>账户安全:<span class="user_safe">安全</span></p>
				<p>绑定手机:<span class="user_tel">12345678910</span></p>
				<p>绑定邮箱:<span class="user_email">未绑定</span></p>
			</el-col>
		  </el-row>
	  </el-header>
	   <el-divider></el-divider>
	  <el-main class="order_show_info">
		  <el-row>
		    <el-col :span="12" class="order_info_item">
				<el-col :span="6">
					<div class="order_icon_bac red">
						<i class="el-icon-wallet"></i>
					</div>
				</el-col>
				<el-col :span="12" class="order_info_text">
					<p>待支付的订单:<span class="order_info_account">0</span></p>
					<a href="">查看待支付的订单<i class="el-icon-arrow-right"></i></a>
				</el-col>
			</el-col>
		    <el-col :span="12" class="order_info_item">
				<el-col :span="6">
					<div class="order_icon_bac green">
						<i class="el-icon-truck"></i>
					</div>
				</el-col>
				<el-col :span="12" class="order_info_text">
					<p>待收货的订单:<span class="order_info_account">0</span></p>
					<a href="">查看待收货的订单<i class="el-icon-arrow-right"></i></a>
				</el-col>
			</el-col>
		    <el-col :span="12" class="order_info_item">
				<el-col :span="6">
					<div class="order_icon_bac blue">
						<i class="el-icon-chat-dot-round"></i>
					</div>
				</el-col>
				<el-col :span="12" class="order_info_text">
					<p>待评价的商品数:<span class="order_info_account">0</span></p>
					<a href="">查看待评价的商品<i class="el-icon-arrow-right"></i></a>
				</el-col>
			</el-col>
		    <el-col :span="12" class="order_info_item">
				<el-col :span="6">
					<div class="order_icon_bac orange">
						<i class="el-icon-goods"></i>
					</div>
				</el-col>
				<el-col :span="12" class="order_info_text">
					<p>喜欢的商品:<span class="order_info_account">0</span></p>
					<a href="">查看喜欢的商品<i class="el-icon-arrow-right"></i></a>
				</el-col>
			</el-col>
		  </el-row>
	  </el-main>
	</el-container>
</template>

<script>
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'
	Vue.use(ElementUI)
	 export default {
	    data () {
	      return {
	        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
	      }
	    }
	  }
</script>

<style scoped="scoped">
	.order_area{
		box-sizing: border-box;
		background-color: #fff;
		padding: 20px 50px;
		box-shadow: 0 0 10px #ccc;
	}
	.order_area .el-header{
		height: auto !important;
	}
	.order_area .self_info{
		padding-top: 25px;
	}
	.order_area .username{
		font-size: 24px;
		font-weight: 600;
		padding-bottom: 15px;
	}
	.user_safe,.user_tel,.user_email{
		padding-left: 15px;
	}
	.order_area .change_self{
		color: #409EFF;
		text-decoration: none;
		font-size: 14px;
	}
	.order_area .user_info{
		color: rgba(0,0,0,.6);
	}
	.order_area .user_info p {
		padding: 8px 0;
	}
	
	.order_show_info{
		padding-top: 50px;
	}
	.order_show_info .order_info_item{
		padding: 25px 0;
	}
	.order_show_info .order_icon_bac{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		text-align: center;
	}
	.order_show_info .order_icon_bac.red{
		background-color: #FF7D7D;
	}
	.order_show_info .order_icon_bac.green{
		background-color: #00DD93;
	}
	.order_show_info .order_icon_bac.blue{
		background-color: #4169E1;
	}
	.order_show_info .order_icon_bac.orange{
		background-color: #FFAC53;
	}
	.order_show_info .order_icon_bac i{
		font-size: 60px;
		color: #fff;
		padding-top: 20px;
	}
	.order_show_info .order_info_text {
		padding: 20px 10px;
	}
	.order_show_info .order_info_text a{
		display: block;
		color: #409EFF;
		text-decoration: none;
		font-size: 14px;
		margin-top: 15px;
	}
	.order_show_info .order_info_text .order_info_account{
		padding-left: 10px;
		color: #FF7D7D;
		font-size: 18px;
		font-weight: 600;
	}
</style>

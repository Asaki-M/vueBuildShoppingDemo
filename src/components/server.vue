<template>
	<el-container>
	  <el-header>
		  <h2 class="title">自助服务</h2>
	  </el-header>
	  <el-main>
		  <el-row :gutter="20">
		    <el-col :span="6" class="server_item" v-for="(item,index) in server" :key="index">
				<a href="">
					<div class="server_icon">
						<img :src="item.icon_url" />
					</div>
					<h3 class="server_title">{{item.server_title}}</h3>
					<p class="server_dec">{{item.server_dec}}</p>
				</a>
			</el-col>
		  </el-row>
	  </el-main>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				server:[
					{icon_url:'http://139.9.60.105/img/server/shouhoufuwu-.png',server_title:'申请售后服务',server_dec:'一键预约，快速维修'},
					{icon_url:'http://139.9.60.105/img/server/wuliu.png',server_title:'订单查询',server_dec:'购物信息，快速搜索'},
					{icon_url:'http://139.9.60.105/img/server/icon_A.png',server_title:'个人账户',server_dec:'重置密保，安全验证'},
					{icon_url:'http://139.9.60.105/img/server/baozhang.png',server_title:'保障服务',server_dec:'碎屏延保，双重保障'},
					{icon_url:'http://139.9.60.105/img/server/huanbiao.png',server_title:'以旧换新',server_dec:'便捷交易，价格保障'},
					{icon_url:'http://139.9.60.105/img/server/fukuan.png',server_title:'付费服务',server_dec:'安装服务，手机维修'},
					{icon_url:'http://139.9.60.105/img/server/zhengcefagui.png',server_title:'售后政策',server_dec:'条款说明，安心保障'},
					{icon_url:'http://139.9.60.105/img/server/zhenweibianbie.png',server_title:'查询真伪',server_dec:'辨别真伪，放心使用'},
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.title{
		text-align: center;
		font-size: 30px;
		padding: 20px 0;
	}
	.server_icon img{
		display: block;
		width: 100px !important;
		padding: 10px 5px;
		margin: 0 auto;
	}
	.server_title{
		text-align: center;
	}
	.server_dec {
		text-align: center;
		font-size: 14px;
		padding: 5px 0;
	}
	.server_item {
		height: 200px;
	}
	.server_item a{
		color: #102726;
		text-decoration: none;
	}
	.server_item:hover img{
		transform: scale(1.2);
		transition: all 0.3s linear;
	}
</style>

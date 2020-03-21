<template>
	<el-row class="foot">
	  <el-col :span="8" class="about">
		  <h3 class="about_title">关于我们</h3>
		  <ul>
			  <li><el-link type="info">公司介绍</el-link></li>
			  <li><el-link type="info">商城简介</el-link></li>
			  <li><el-link type="info">零售店</el-link></li>
			  <li><el-link type="info">意见反馈</el-link></li>
		  </ul>
	  </el-col>
	  <el-col :span="8" class="link">
		  <h3 class="link_title">友情链接</h3>
		  <ul>
			  <li><el-link type="info">百度一下</el-link></li>
			  <li><el-link type="info">淘宝网</el-link></li>
			  <li><el-link type="info">华为官网</el-link></li>
			  <li><el-link type="info">魅族官网</el-link></li>
		  </ul>
	  </el-col>
	  <el-col :span="8" class="online_server">
		  <h1 class="tel_num">908070</h1>
		  <p class="online_server_dec">7x24小时客服热线（仅收市话费）</p>
		  <button>在线客服</button>
	  </el-col>
	</el-row>
</template>

<script>
</script>

<style scoped="scoped">
	.foot{
		height: auto;
	}
	.about, .link{
		border-right: 1px solid #909399;
	}
	.about, .link, .online_server{
		text-align: center;
		height: auto;
		padding: 20px 0;
		background-color: #f9f9f9;
	}
	.about ul li,
	.link ul li{
		list-style: none;
		padding: 5px 0;
	}
	.online_server .online_server_dec{
		padding: 10px 0;
	}
	.online_server button{
		width: 150px;
		height: 50px;
		background-color: #3B3B3B;
		color: #f5f5f5;
		border-radius: 24px;
		border: none;
		outline: none;
		cursor: pointer;
		margin-top: 20px;
	}
	.online_server button:hover{
		text-decoration: underline;
		background-color: #474554;
	}
</style>

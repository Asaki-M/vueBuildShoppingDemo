<template>
	<el-container class="layout__contain">
	  <el-header class="layout__header">
		  <el-col :span="21"><h2 class="content__title">{{list_data[0].classification}}</h2></el-col>
		  <el-col :span="3">
			  <router-link :to="list_data[4].src" class="see_all"><h3>查看全部<span class="el-icon-d-arrow-right"></span></h3></router-link>
		  </el-col>
	  </el-header>
	  <el-container>
	    <el-aside class="layout__aside">
			<div class="phone_bac">
				<img :src="list_data[1].bac_url" />
			</div>
		</el-aside>
	    <el-main class="layout__main">
			<el-row :gutter="20">
			  <el-col :span="6" v-for="(item,index) in list_data[3].area_url" :key="index">
				  <router-link :to="item.url">
					  <img :src="item.imgUrl" />
					  <p class="phone_title">{{item.title}}</p>
					  <p class="phone_dec">{{item.dec}}</p>
					  <p class="phone_price">{{item.price}}</p>
				  </router-link>
			  </el-col>
			</el-row>
		</el-main>
	  </el-container>
	  <el-footer class="layout__footer">
		  <img :src="list_data[2].ad" />
	  </el-footer>
	</el-container>
</template>

<script>
	import datalist from '../store/dataList.js'
	export default {
		data() {
			return {
			}
		},
		props:["list_data"]
	}
</script>

<style scoped="scoped">
	.layout__contain{
		width: 100%;
		background-color: #fff;
	}
	.content__title{
		font-size: 30px;
	}
	.layout__header, .el-footer {
	    color: #333;
	    line-height: 60px;
	}
	.layout__header{
		margin-bottom: 30px;
	}
	.layout__header h2{
		font-weight: 500;
	}
	.layout__header a{
		text-decoration: none;
	}
	
	.layout__header a h3{
		text-align: right;
		color: #000;
		font-weight: 500;
	}
	
	.layout__header h3 span{
		font-size: 24px;
		padding-left: 10px;
	}
	
	.layout__aside .phone_bac{
		padding-left: 20px;
		flex: 1;
		height: 100%;
	}
	.layout__aside>.phone_bac>img{
		width: 100%;
	}
	.layout__main{
		flex: 24;
	}
	.layout__main .el-row{
		height: 100%;
	}
	.layout__main .el-col{
		background-color: #fff;
		height: 350px;
	}
	.layout__main .el-col a{
		text-decoration: none;
		color: #000;
		text-align: center;
	}
	.layout__main .el-col a img{
		width: 80%;
		padding-left: 22px;
	}
	.layout__main .el-col a .phone_title{
		font-weight: 700;
	}
	.layout__main .el-col a .phone_dec{
		padding: 10px 0;
		font-size: 14px;
		color: #ccc;
	}
	.layout__main .el-col a .phone_price{
		color: orange;
	}
	.layout__footer {
		margin-top: 100px;
		height: 140px !important;
	}
	.layout__footer  img{
		width: 100%;
		height: 120px;
	}
	
	/* 过渡效果 */
	.layout__main .el-col:hover img{
		width: 90%;
		transition: all 0.2s linear; 
	}
	.layout__header .el-col:hover .see_all h3{
		color: orange;
		font-size: 20px;
		transition: all 0.3s linear;
	}
</style>

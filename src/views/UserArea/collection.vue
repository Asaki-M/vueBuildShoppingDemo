<template>
	<div class="collection__contain">
		<div class="collection__title__contain">
			<div class="collection__title">
				<h3>我的收藏</h3>
			</div>
		</div>
		<div class="collection__contents">
			<div class="contents__noData" v-show="itemList.length===0">
				<h2>您暂无此类订单</h2>
			</div>
			<div v-show="itemList.length!=0">
				<el-row :gutter="20">
				  <el-col :span="5" :offset="1" v-for="(item,index) in itemList" :key="index" class="contents__item">
					  <img :src="item.imgUrl" />
					  <p>{{item.title}}</p>
				  </el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
			itemList:[]
	      }
	    }
	  }
</script>

<style scoped="scoped">
	.collection__contain{
		box-shadow: 0 0 10px #ccc;
		padding: 20px 0;
	}
	.collection__title__contain{
		width: 100%;
		padding-left: 20px;
		border-bottom: 1px solid #ebeef5;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	.collection__title{
		width: 10%;
		color: #409EFF;
		border-bottom: 3px solid #409EFF;
		font-size: 24px;
	}
	.collection__contents{
		width: 100%;
		height: 500px;
	}
	.collection__contents .contents__noData{
		width: 100%;
		height: 500px;
		background: url('../../assets/img/noData.png') no-repeat center center;
		background-size: 35%;
		text-align: center;
		padding-top: 100px;
		color: #c8c8c8;
	}
	.collection__contents .contents__item{
		border: 1px solid #ebeef5;
		text-align: center;
		margin-top: 20px;
		font-size: 22px;
	}
	.collection__contents .contents__item:hover{
		border-color: #CECFDB;
		transition: all 0.5s;
	}
	.collection__contents .contents__item img{
		width: 100%;
	}
	.collection__contents .contents__item p{
		padding: 0 20px;
		white-space:nowrap;
		overflow:hidden; 
		text-overflow:ellipsis;
	}
</style>

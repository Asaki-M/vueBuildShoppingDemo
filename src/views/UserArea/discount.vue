<template>
	<div class="discount__contain">
		<div class="discount__title__contain">
			<el-row :gutter="20">
				<el-col :span="2" :offset="1" :class="[isusing?'discount__title__active':'']">
					<h3 @click="addActiveState('可使用')">可使用</h3>
				</el-col>
				 <el-col :span="2" :offset="1" :class="[isused?'discount__title__active':'']">
					<h3 @click="addActiveState('已使用')">已使用</h3>
				 </el-col>
				 <el-col :span="2" :offset="1" :class="[isover?'discount__title__active':'']">
					<h3 @click="addActiveState('已过期')">已过期</h3>
				 </el-col>
			</el-row>
		</div>
		<div class="discount__contents">
			<div class="contents__noData" v-show="itemList.length===0">
				<h2>您暂无可使用的优惠券</h2>
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
			itemList:[],
			isusing:true,
			isused:false,
			isover:false
	      }
	    },
		methods:{
			addActiveState(state){
				if (state == '可使用') {
					this.isusing = true
					this.isused = false
					this.isover = false
				} else if (state == '已使用') {
					this.isusing = false
					this.isused = true
					this.isover = false
				} else{
					this.isusing = false
					this.isused = false
					this.isover = true
				}
			}
		}
	  }
</script>

<style scoped="scoped">
	.discount__contain{
		box-shadow: 0 0 10px #ccc;
		padding: 20px 10px;
	}
	.discount__title__contain{
		width: 100%;
		padding-left: 20px;
		border-bottom: 1px solid #ebeef5;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	.discount__title__contain h3{
		cursor: pointer;
		font-size: 24px;
	}
	.discount__title__active{
		color: #409EFF;
		border-bottom: 3px solid #409EFF;
	}
	.discount__contents{
		width: 100%;
		height: 500px;
	}
	.discount__contents .contents__noData{
		width: 100%;
		height: 500px;
		background: url('../../assets/img/noData.png') no-repeat center center;
		background-size: 35%;
		text-align: center;
		padding-top: 100px;
		color: #c8c8c8;
	}
	.discount__contents .contents__item{
		border: 1px solid #ebeef5;
		text-align: center;
		margin-top: 20px;
		font-size: 22px;
	}
	.discount__contents .contents__item:hover{
		border-color: #CECFDB;
		transition: all 0.5s;
	}
	.discount__contents .contents__item img{
		width: 100%;
	}
	.discount__contents .contents__item p{
		padding: 0 20px;
		white-space:nowrap;
		overflow:hidden; 
		text-overflow:ellipsis;
	}
</style>

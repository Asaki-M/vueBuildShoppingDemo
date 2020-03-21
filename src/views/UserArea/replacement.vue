<template>
	<div class="replace__contain">
		<div class="replace__title__contain">
			<div class="replace__title">
				<h3>售后退换货</h3>
			</div>
		</div>
		<div class="replace__header">
			<div class="replace__goods">订单商品</div>
			<div class="replace__money">退还金额</div>
			<div class="replace__state">
				<el-select v-model="value" placeholder="默认">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
			</div>
			<div class="replace__operation">操作</div>
		</div>
		<div class="replace__contents">
			<div class="contents__noData" v-show="itemList.length===0">
				<h2>您暂无此类订单</h2>
			</div>
			<div v-show="itemList.length!=0">
				<div class="contents__item"  v-for="(item,index) in itemList" :key="index">
					<el-row>
						<el-col :span="9" :offset="1" class="item item__title">
							<a href="/"><p>{{item.title}}</p></a>
						</el-col>
						<el-col :span="4" :offset="1" class="item item__price">
							<p>{{item.price}}元</p>
						</el-col>
						<el-col :span="3" :offset="1" class="item item__state">
							<p>{{item.state}}</p>
						</el-col>
						<el-col :span="2" :offset="2" class="item item__operation">
							<el-link type="danger">取消</el-link>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        options: [{
	          value: '全部',
	          label: '全部'
	        },{
	          value: '换货中',
	          label: '换货中'
	        }, {
	          value: '退款中',
	          label: '退款中'
	        }, {
	          value: '退货中',
	          label: '退货中'
	        }],
	        value: '',
			itemList:[{
				title:'魅族 16s Pro',
				price:3100,
				state:'退货中'
			},{
				title:'魅族 16s 白夜童话限量礼盒',
				price:3199,
				state:'退款中'
			}],
			oldList:[]
	      }
	    },
		created() {
			this.oldList = this.itemList
		},
		watch:{
			'value':function(){
				let newList = []
				newList = this.oldList.filter((value) => {
					if (this.value === '全部') {
						return this.itemList
					}
					return value.state === this.value
				})
				this.itemList = newList
			}
		}
	  }
</script>

<style scoped="scoped">
	.replace__contain{
		box-shadow: 0 0 10px #ccc;
		border-radius: 10px;
		padding: 20px 10px;
	}
	.replace__title__contain{
		width: 100%;
		padding-left: 20px;
		border-bottom: 1px solid #ebeef5;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	.replace__title{
		width: 10%;
		color: #409EFF;
		font-size: 24px;
		border-bottom: 3px solid #409EFF;
	}
	.replace__header{
		display: flex;
		height: 40px;
		margin-top: 30px;
		background-color: #f5f5f5;
		text-align: center;
		box-sizing: border-box;
		font-size: 18px;
	}
	.replace__header>.replace__goods{
		flex: 4;
		text-align: left;
		padding-left: 50px;
		line-height: 40px;
	}
	.replace__header>.replace__money{
		flex: 2;
		line-height: 40px;
	}
	.replace__header>.replace__state{
		flex: 3;
		line-height: 40px;
	}
	.replace__header>.replace__operation{
		flex: 2;
		line-height: 40px;
	}
	.replace__contents{
		width: 100%;
		height: 500px;
	}
	.replace__contents .contents__noData{
		width: 100%;
		height: 500px;
		background: url('../../assets/img/noData.png') no-repeat center center;
		background-size: 35%;
		text-align: center;
		padding-top: 100px;
		color: #c8c8c8;
	}
	.contents__item{
		border-bottom: 1px solid #EBEEF5;
	}
	.contents__item a{
		color: #333;
		text-decoration: none;
	}
	.contents__item a:hover{
		color: #409EFF;
		transition: all 0.5s;
	}
	.contents__item .item{
		height: 50px;
		line-height: 50px;
		font-size: 16px;
	}
	.contents__item .item__operation{
		margin-left: 11%;
	}
	.contents__item .item__price{
		color: #E95761;
	}
</style>

<template>
	<el-container class="area__content__container">
	  <el-header class="area_header">
		  <el-row class="title_area">
		    <el-col :span="12">
		  	  <p><span class="el-icon-shopping-bag-2"></span>{{typename}}专区</p>
		    </el-col>
		    <el-col :span="12" class="right_order">
		  	 <a href="javascript:;" class="active" ref="comprehensive" @click="active">综合</a>
		  	 <a href="javascript:;" class="is_up_down" ref="price_icon_up_down">
				 <span @click="change">价格</span>
				 <i class="el-icon-d-caret" ref="icon_change"></i>
			 </a>
		    </el-col>
		  </el-row>
	  </el-header>
	  <el-main>
		  <el-row class="phones_contain">
			  <el-col :span="10" :offset="1" :push="1" class="content_contain" v-for="(item,index) in getDataList()" :key='index'>
				  <a :href="item.url">
					  <el-col :span="6" class="show_img">
						  <img :src="item.imgUrl" />
					  </el-col>
					  <el-col :span="12" class="left_info">
						  <p class="name">{{item.title}}</p>
						  <p class="dec">{{item.dec}}</p>
					  </el-col>
					  <el-col :span="12" class="right_info">
						  <p class="price">{{item.price}}</p>
					  </el-col>					  
				  </a>
			  </el-col>
		  </el-row>
	  </el-main>
	</el-container>
</template>

<script>
	import datalist from '../../store/dataList.js'
	export default{
		data() {
			return {
				isDown:true,
				dataList:[],
				type:'',
				typename:'',
				priceDownList: [],
				priceUpList: [],
				selectDataList: 0           // 0 为初始状态即综合， 1 为价格从小到大，2 为价格从大到小
			}
		},
		created() {
			this.type = this.$route.query.type
			if (this.type == 'phone') {
				this.dataList = datalist.phoneList
				this.typename = '手机'
			} else if(this.type == 'furniture'){
				this.dataList = datalist.furnitureList
				this.typename = '家电'
			} else if(this.type == 'parts'){
				this.dataList = datalist.partsList
				this.typename = '配件'
			}
		},
		methods:{
			change(){
				if(this.isDown){
					this.$refs.price_icon_up_down.classList = 'active is_up_down'
					this.$refs.icon_change.classList = 'el-icon-bottom'
					this.$refs.comprehensive.classList = ''
					this.isDown = false
					this.selectDataList = 1
					this.price_down(this.dataList)
				} else {
					this.$refs.price_icon_up_down.classList = 'active is_up_down'
					this.$refs.comprehensive.classList = ''
					this.$refs.icon_change.classList = 'el-icon-top'
					this.isDown = true
					this.selectDataList = 2
					this.price_up(this.dataList)
				}
			},
			active(){
				this.$refs.comprehensive.classList = 'active'
				this.$refs.price_icon_up_down.classList='is_up_down'
				this.$refs.icon_change.classList = 'el-icon-d-caret'
				this.selectDataList = 0
			},
			price_down(arr){
				let min
				for (let i = 0; i < arr.length; i++) {
					for (let j = i; j < arr.length; j++) {
						if (arr[i].price > arr[j].price) {
							min = arr[j]
							arr[j] = arr[i]
							arr[i] = min
						}
					}
				}
				this.priceDownList = arr
			},
			price_up(arr){
				let max
				for (let i = 0; i < arr.length; i++) {
					for (let j = i; j < arr.length; j++) {
						if (arr[i].price < arr[j].price) {
							max = arr[j]
							arr[j] = arr[i]
							arr[i] = max
						}
					}
				}
				this.priceUpList = arr
			},
			getDataList(){
				if (this.selectDataList === 2) {
					return this.priceUpList
				} else if(this.selectDataList === 1){
					return this.priceDownList
				} else {
					return this.dataList
				}
			}
		}
	}
</script>

<style>
	.area__content__container{
		background-color: #f8f8f8;
	}
	.content_contain{
		background-color: #fff;
		margin-top: 40px;
	}
	.area_header{
		width: 80%;
		margin: 0 auto;
		padding-top: 50px;
	}
	.right_order{
		text-align: right;
	}
	.title_area{
		font-size: 30px;
	}
	.right_order a{
		color: #000000;
		text-decoration: none;
		font-size: 24px;
		padding: 0 20px;
	}
	.right_order a.active{
		color: #409EFF;
	}
	
	.content_contain:hover{
		box-shadow:0 1px 2px rgba(0,0,0,0.07),
					0 2px 4px rgba(0,0,0,0.07),
					0 4px 8px rgba(0,0,0,0.07),
					0 8px 16px rgba(0,0,0,0.07),
					0 16px 32px rgba(0,0,0,0.07),
					0 32px 64px rgba(0,0,0,0.07);
		transform: translateY(-10px);
		transition: all 0.5s;
	}
	.show_img{
		width: 100%;
	}
	.show_img img{
		width: 100%;
	}
	.left_info .name{
		font-size: 28px;
		padding: 20px 0;
		text-align: center;
	}
	.left_info .dec{
		font-size: 14px;
		color: rgba(51,51,51,.7);
		text-align: center;
	}
	.right_info .price{
		color: orangered;
		font-size: 26px;
		font-weight: 500;
		text-align: center;
		padding: 40px 0;
	}
</style>

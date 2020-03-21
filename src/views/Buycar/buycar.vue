<template>
	<div class="buycar">
		<el-container class="shopcar__container">
			<el-header class="shopcar__heaeder">
				<el-row>
					<el-col :span="4" class="shopcar__header__logo">
						<router-link to="/" tag="a">
							<img :src="'http://139.9.60.105/img/logo.png'" />
						</router-link>
					</el-col>
					<el-col :span="16" class="shopcar__steps">
						<el-breadcrumb separator-class="el-icon-arrow-right">
							<el-breadcrumb-item class="step step__active">购物车</el-breadcrumb-item>
							<el-breadcrumb-item class="step">确认订单</el-breadcrumb-item>
							<el-breadcrumb-item class="step">在线支付</el-breadcrumb-item>
							<el-breadcrumb-item class="step">完成</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="4" class="shopcar__header__user">
						<router-link to="/user">
							<span>个人中心</span>
							<i class="el-icon-house"></i>
						</router-link>
					</el-col>
				</el-row>
			</el-header>
			<el-main class="shopcar__main">
				<div class="shopcar__content__title">
					<el-row>
						<el-col :span="8">
							<el-checkbox v-model="isAllCheck" @change="selectAll">全选</el-checkbox>
						</el-col>
						<el-col :span="4" class="title__tip">单价(元)</el-col>
						<el-col :span="4" class="title__tip">数量</el-col>
						<el-col :span="4" class="title__tip">小计(元)</el-col>
						<el-col :span="4" class="title__operation">
							<el-button type="text" @click="editShopCar">{{editBtn}}</el-button>
						</el-col>
					</el-row>
				</div>
				<div v-show="list.length === 0" class="no__order">
					<h2>您暂无订单，快去下单吧！</h2>
				</div>
				<div class="shopcar__contents" v-show="list.length!=0">
					<el-row class="shopcar__content__contain" v-for="(item,index) in list" :key="index">
						<el-col :span="1">
							<el-checkbox v-model="isCheck[index]" @change="changeCheck(index)"></el-checkbox>
						</el-col>
						<el-col :span="7" class="content__img__a">
							<a href="16s_Pro.html">
								<el-col :span="6">
									<img :src="item.imgUrl"/>
								</el-col>
								<el-col :span="18" class="content_dec">
										<p>{{item.title}}</p>
										<p>{{item.model}}</p>
								</el-col>
							</a>
						</el-col>
						<el-col :span="3" class="shopcar__content">
							￥{{item.price}}.00
						</el-col>
						<el-col :span="5" class="shopcar__content count__amount">
							<el-button :disabled="item.amount==0" @click="decreaseAmount(index)">-</el-button>
							<div class="amount">{{item.amount}}</div>
							<el-button :disabled="item.amount>=5" @click="addAmount(index)">+</el-button>
						</el-col>
						<el-col :span="4" class="shopcar__content shopcar__price">
							￥{{item.price*item.amount}}.00
						</el-col>
						<el-col :span="4" class="content__operation">
							<el-button type="text" @click="removeOrders">{{edit}}</el-button>
						</el-col>
					</el-row>
				</div>
				<el-row class="footer__contain">
					<el-col :span="3">
						<el-checkbox v-model="isAllCheck" @change="selectAll">全选</el-checkbox>
					</el-col>
					<el-col :span="3">
						<el-button type="text" class="remove__btn">删除选中商品</el-button>
					</el-col>
					<el-col :span="10">
						<span>共{{count}}件商品， 已选择<span class="sel__amount"> {{selcount}} </span>件</span>
					</el-col>
					<el-col :span="5">
						<span>合计(不含运费)：￥<span class="sel__price"> {{countPrice}}.00 </span></span>
					</el-col>
					<el-col :span="3">
						<el-button type="danger">去结算</el-button>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
		<buycar-footer></buycar-footer>
	</div>
</template>

<script>
	import ShopcarData from '../../store/dataList.js'
	import ShopcarFooter from '../../components/footer.vue'
	export default{
		data(){
			return{
				isFixed:false,
				isAllCheck:true,
				isCheck:[],
				countPrice:0,
				count:0,
				selcount:0,
				editBtn:'编辑',
				edit:'--',
				list:[]
			}
		},
		components:{
			'buycar-footer':ShopcarFooter
		},
		created() {
			this.list = ShopcarData.shopcarList
			this.count = this.list.length
			if(this.isAllCheck){
				let allPrice = 0
				let oneOfPrice = 0
				for(let i = 0; i < this.list.length; i++){
					this.isCheck[i] = true
					oneOfPrice = this.list[i].price * this.list[i].amount
					allPrice += oneOfPrice
				}
				this.countPrice = allPrice
			}
			this.selcount = this.getSelcount()
		},
		mounted() {
			if (this.list.length > 4) {
				this.isFixed = true
			}
		},
		methods:{
			addAmount(idx){
				this.list[idx].amount++
				this.countPrice = this.getAllPrice()
			},
			decreaseAmount(idx){
				this.list[idx].amount--
				this.countPrice = this.getAllPrice()
			},
			editShopCar(){
				if(this.edit === '--'){
					this.edit = '×'
					this.editBtn = '完成'
				} else{
					this.edit = '--'
					this.editBtn = '编辑'
				}
			},
			removeOrders(){
				if(this.edit === '×'){
					this.list.splice(0,1)
				}
			},
			selectAll(){
				if (this.isAllCheck) {
					this.isAllCheck = false
					for(let i = 0; i < this.isCheck.length; i++){
						this.isCheck[i] = false
					}
				} else{
					this.isAllCheck = true
					for(let i = 0; i < this.isCheck.length; i++){
						this.isCheck[i] = true
					}
				}
			},
			changeCheck(idx){
				if (this.isCheck[idx]) {
					this.isCheck[idx] = false
					
				} else{
					this.isCheck[idx] = true
				}
				this.selcount = this.getSelcount()
				this.countPrice = this.getAllPrice()
			},
			getSelcount(){
				let c = 0
				for(let i = 0; i < this.isCheck.length; i++){
					if(this.isCheck[i]){
						c++
						this.isAllCheck = true
					} else{
						this.isAllCheck = false
					}
				}
				return c
			},
			getAllPrice(){
				let allPrice = 0
				let oneOfPrice = 0
				for(let i = 0; i < this.isCheck.length; i++){
					if(this.isCheck[i]){
						oneOfPrice = this.list[i].price * this.list[i].amount
						allPrice += oneOfPrice
					} else{
						
					}
				}
				return allPrice
			}
		}
	}
</script>

<style>
	.shopcar__container{
		width: 100%;
		background-color: #F4F6FA;
		padding-bottom: 80px;
	}
	.shopcar__heaeder{
		width: 100%;
		height: 70px!important;
		margin: 0 auto;
		font-size: 18px;
		background-color: #fff;
		padding-left: 6%;
	}
	.shopcar__header__logo a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.shopcar__header__logo a img{
		height: 70px;
	}
	.shopcar__steps{
		padding: 0 30px;
	}
	.shopcar__steps .step{
		font-size: 18px;
		line-height: 70px;
	}
	.shopcar__steps .step span:last-of-type,
	.shopcar__steps .step span,
	.shopcar__steps .step i{
		color: #ccc;
	}
	.shopcar__steps .step.step__active span{
		color: #333;
	}
	.shopcar__header__user a{
		line-height: 70px;
		color: #333;
		text-decoration: none;
	}
	.shopcar__header__user a:hover{
		color: #409EFF;
		text-decoration: none;
		transition: all 0.5s; 
	}
	
	.shopcar__main{
		width: 100%;
		height: auto;
		flex-direction: column;
	}
	.shopcar__content__title{
		width: 90%;
		height: 50px;
		margin: 0 auto;
		background-color: #fff;
		line-height: 50px;
		padding: 0 20px;
	}
	.shopcar__content__title .title__tip{
		font-size: 16px;
		color: #ccc;
	}
	.shopcar__content__title .title__operation{
		text-align: center;
	}
	
	.no__order{
		width: 90%;
		height: 500px;
		margin: 20px auto 0;
		background: url('../../assets/img/noData.png') no-repeat center center;
		background-size: 35%;
		text-align: center;
		padding-top: 100px;
		color: #c8c8c8;
		background-color: #fff;
	}
	
	.shopcar__content__contain{
		padding: 10px 0;
		box-sizing: border-box;
		border-bottom: 3px solid #F4F6FA;
	}
	.content__img__a img{
		height: 100px;
	}
	.content__img__a span{
		font-size: 20px;
	}
	.content_dec{
		padding-top: 7%;
	}
	.content_dec p:first-of-type{
		font-size: 20px;
		color: #333;
	}
	.content_dec p{
		color: #8c8c8c;
		line-height: 20px;
		padding-left: 7%;
	}
	.shopcar__contents{
		width: 90%;
		margin: 20px auto 0;
		padding: 0 20px;
		background-color: #fff;
		line-height: 100px;
	}
	.shopcar__content{
		font-size: 20px;
	}
	.shopcar__price{
		color: #E95761;
	}
	.count__amount{
		display: flex;
		padding-top: 1.5%;
	}
	.count__amount .amount{
		width: 80px;
		text-align: center;
		font-size: 18px;
		line-height: 50px;
		border: 1px solid #ccc;
	}
	.content__operation{
		text-align: center;
	}
	.content__operation button span{
		font-size: 20px;
		color: #ccc;
	}
	
	.footer__contain{
		width: 90%;
		padding: 0 20px;
		background-color: #fff;
		margin: 40px auto 0;
		height: 80px!important;
		line-height: 80px;
		font-size: 18px;
	}
	.remove__btn{
		color: #8c8c8c;
		font-size: 16px;
	}
	.remove__btn:hover{
		color: #ccc;
	}
	.sel__amount{
		font-size: 20px;
		color: #E95761;
	}
	.sel__price{
		font-size: 24px;
		color: #E95761;
	}
</style>

<template>
	<div class="detailsLayout">
		<header>
			<details-header class="main__header"></details-header>
		</header>
		<el-container class="phone__details__container">
			<el-header class="phone__details__header" :class="{sport:isSport}">
				<el-row>
					<el-col :span="6">
						<span class="header__title">{{data_list.title}}</span>
					</el-col>
					<el-col :span="6" :push="12">
						<div class="header__nav">
							<el-col :span="4"><a href="javascript:;">概述</a></el-col>
							<el-col :span="2"><el-divider direction="vertical"></el-divider></el-col>
							<el-col :span="4"><a href="javascript:;">性能</a></el-col>
							<el-col :span="2"><el-divider direction="vertical"></el-divider></el-col>
							<el-col :span="4"><a href="javascript:;">相机</a></el-col>
							<el-col :span="2"><el-divider direction="vertical"></el-divider></el-col>
							<el-col :span="4"><a href="javascript:;">参数</a></el-col>
						</div>
					</el-col>
				</el-row>
			</el-header>
			<el-main class="phone__details__main">
				<el-row>
					<el-col :span="12" class="left__show__img__contain">
						<div class="show__img" :class="{showActive:isActive}">
							<img :src="data_list.showImg.dream[currentIndex]" />
						</div>
						<div class="show__small__img">
							<el-row :gutter="20">
								<el-col :span="5" class="small__img__item" :class="{active:index==currentIndex}"
									v-for="(item,index) in data_list.smallImg.dream" :key="index">
									<img :src="item"  @click="changeImg(index)" />
								</el-col>
							</el-row>
						</div>
					</el-col>
					<el-col :span="12">
						<h2 class="right__title">{{data_list.title}}</h2>
						<div class="right__dec">
							<span v-for="(item,index) in data_list.dec" :key="index">{{item}}</span>
							<el-divider direction="vertical"></el-divider>
						</div>
						<div class="right__price__contain">
							<div class="right__price">￥<span>{{data_list.price}}.00</span></div>				
							<el-tag type="danger" class="right__price__tag">加购价</el-tag>
							<span class="right__price__dec">另加29元起，即可换购超值商品</span>
							<a href="" class="right__price__link">立即加购 <i class="el-icon-arrow-right"></i></a>
						</div>
						<div class="right__support">
							<span class="right__label">支持</span>
							<i class="el-icon-circle-check"></i>
							<span>花呗分期</span>
							<i class="el-icon-circle-check"></i>
							<span>顺丰发货</span>
							<i class="el-icon-circle-check"></i>
							<span>7天无理由退货（激活后不支持）</span>
						</div>
						<div class="right__model">
							<span class="right__label">型号</span>
							<el-button plain class="right__btn" v-for="(item,index) in data_list.model" :key="index">
								{{item}}
							</el-button>
						</div>
						<div class="right__model">
							<span class="right__label">网络类型</span>
							<el-button plain class="right__btn" v-for="(item,index) in data_list.interType" :key="index">
								{{item}}
							</el-button>
						</div>
						<div class="right__model">
							<span class="right__label">颜色分类</span>
							<el-button plain class="right__btn right__classification__btn"
								v-for="(item,index) in data_list.classification" :key="index">
								<img :src="item.img" :alt="item.c" />
							</el-button>
						</div>
						<div class="right__model">
							<span class="right__label">内存容量</span>
							<el-button plain class="right__btn" v-for="(item,index) in data_list.memory" :key="index">
								{{item}}
							</el-button>
						</div>
						<div class="right__model">
							<span class="right__label">选择套餐</span>
							<el-button plain class="right__btn">官方标配</el-button>
							<el-button plain class="right__btn">碎屏保套餐</el-button>
						</div>
						<div class="right__model how__amount">
							<span class="right__label">数量</span>
							<el-button style="margin-left: 30px;" :disabled="phone_amount==0" @click="decreaseAmount">-</el-button>
							<div class="right__amount">{{phone_amount}}</div>
							<el-button :disabled="phone_amount>=5" @click="addAmount">+</el-button>
						</div>
						<div class="buy__now">
							<el-button type="primary">立即购买</el-button>
							<el-button type="danger">加入购物车</el-button>
						</div>
					</el-col>
				</el-row>
			</el-main>
			<el-footer class="phone__details__footer">
				<div class="phone__details__footer__contain">
					<h3 class="phone__details__footer__title">商品详情</h3>
					<div class="phone__details__footer__show__img">
						<img :src="item" v-for="(item,index) in data_list.detailsImg" :key="index"/>
					</div>
					<a href=""><img :src="data_list.adImg"></a>
				</div>
			</el-footer>
			<div class="back__top" :class="{backActive:scrollTop>=1190}" @click="setScroll(0)">
				<i class="el-icon-caret-top"></i>
			</div>
		</el-container>
		<details-footer class="main__footer"></details-footer>
	</div>
</template>

<script>
	// 导入js 动画库
	import TWEEN from '@tweenjs/tween.js'
	import PhoneData from '../../store/dataList.js'
	import Area_topbar from '../area_topbar.vue'
	import Tail from '../../components/footer.vue'
	export default{
		data(){
			return { 
				phone_amount:0,
				currentIndex:0,
				isActive:false,
				isSport:false,
				scrollTop:0,
				timer:0,
				data_list:{}
			}
		},
		components:{
			'details-header':Area_topbar,
			'details-footer':Tail
		},
		created() {
			this.data_list = PhoneData.phoneDetailsData
			this.changeImg(0)
		},
		mounted(){
			this.tweenUpdate()
			window.addEventListener('scroll', this.getScrollTop, true)
		},
		watch:{
			'scrollTop':function(newVal){
				if (newVal >= 72) {
					this.isSport = true
				} else{
					this.isSport = false
				}
			}
		},
		methods:{
			changeImg(index){
				clearTimeout(this.timer)
				this.currentIndex = index
				this.timer = setTimeout(()=>{
					this.isActive = true
				},100)
				this.isActive = false
			},
			addAmount(){
				this.phone_amount++
			},
			decreaseAmount(){
				this.phone_amount--
			},
			getScrollTop() {
				let top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop)
				this.scrollTop = top
			},
			setScroll(top) {
				let AppScrollTopNow = {
					y: window.scrollY
				}, 
				AppScrollTopEnd = {
					y: top
				} 
			
				new TWEEN.Tween(AppScrollTopNow) // 传入开始位置
				  .to(AppScrollTopEnd, 600) // 指定时间内完成结束位置
				  .easing(TWEEN.Easing.Quadratic.Out) // 缓动方法名
				  .onUpdate(() => {
					  // 上面的值更新时执行的设置
					  document.documentElement.scrollTop = AppScrollTopNow.y
					  document.body.scrollTop = AppScrollTopNow.y
				  }).start()
			},
			tweenUpdate(){
				requestAnimationFrame(this.tweenUpdate);
				TWEEN.update();
			}
		}
	}
</script>

<style scoped="scoped">
	.detailsLayout{
		background-color: #fff;
	}
	.main__header{
		background-color: #fff;
	}
	.main__header{
		margin-bottom: 20px;
		border-bottom: 1px solid #ccc;
	}
	header .topbar-menu .menu li,
	header .topbar-menu .menu-right .icon a span{
		color: #102726;
	}
	
	header .topbar-menu .menu li:hover,
	header .topbar-menu .menu-right .icon a span:hover{
		color: #409EFF;
		text-decoration: underline;
	}
	header .topbar-menu .menu-right .icon a span:hover{
		text-decoration: none;
	}
	.topbar-menu .menu a[data-v-ed138b34],
	.topbar-menu .menu li{
		color: #333!important;
	}
	.phone__details__container{
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	.phone__details__header{
		padding-left: 10%;
		padding-right: 10%;
		background-color: #f6f8fb;
		height: 80px!important;
		margin-top: 72px;
	}
	.phone__details__header.sport{
		position: fixed;
		width: 100%;
		z-index: 6;
		background-color: rgba(246,248,251,0.7);
		top: 0;
		margin-top: 0;
		transition: all 0.5;
	}
	.phone__details__header .header__title{
		font-size: 24px;
		line-height: 80px;
	}
	.phone__details__header .header__nav{
		font-size: 18px;
		line-height: 80px;
		text-align: right;
	}
	.phone__details__header .header__nav a{
		text-decoration: none;
		color: #474554;
	}
	.phone__details__header .header__nav a:hover{
		color: #409EFF;
		transition: all 0.3s;
	}
	/* 布局主体内容样式开始 */
	/* 主体内容左边样式开始 */
	.phone__details__main{
		padding-bottom: 100px;
	}
	
	.show__img{
		width: 100%;
		opacity: 0;
	}
	.show__img img{
		width: 100%;
	}
	.show__img.showActive{
		animation: fade 0.5s;
		animation-fill-mode: forwards;
	}
	
	.show__small__img{
		padding-left: 15%;
	}
	.small__img__item{
		padding-left: 10%;
		padding-right: 10%;
	}
	.small__img__item.active{
		border-bottom-right-radius: 10%;
		border-bottom-left-radius: 10%;
		box-shadow: 0 5px 5px #ccc;
		transform: translateY(-10px);
	}
	.small__img__item img{
		width: 100%;
	}
	/* 主体内容左边样式结束 */
	/* 主体内容右边样式开始 */
	.right__title{
		font-weight: bold;
		font-size: 24px;
		padding: 20px 0;
	}
	.right__dec span{
		font-size: 16px;
		color: #c93756;
	}
	.right__dec>.el-divider{
		background-color: #C93756;
	}
	.right__price__contain{
		width: 100%;
		margin-top: 25px;
		padding: 20px 15px;
		background-color: #f4f6fa;
		color: #c93756;
	}
	.right__price__contain .right__price{
		font-size: 26px;
	}
	.right__price__contain .right__price span{
		font-size: 40px;
		font-weight: bold;
	}
	.right__price__tag{
		font-size: 16px;
	}
	.right__price__dec{
		color: #333333;
		font-size: 16px;
		padding: 0 20px;
	}
	.right__price__link{
		color: #409EFF;
		font-size: 16px;
	}
	.right__support{
		margin-top: 20px;
		color: #8c8c8c;
		padding-bottom: 30px;
		border-bottom: 1px dotted #8c8c8c;
	}
	.right__support i{
		padding-left: 10px;
	}
	.right__label{
		display: inline-block;
		width: 80px;
		font-size: 14px;
		color: #8c8c8c;
	}
	.right__model{
		margin-top: 20px;
	}
	.right__btn{
		width: 150px;
		font-size: 16px;
		margin-left: 30px;
	}
	.right__classification__btn{
		font-size: 16px;
		text-align: center;
	}
	.right__classification__btn img{
		height: 70px;
	}
	.how__amount{
		display: flex;
		height: 50px;
	}
	.how__amount>span{
		line-height: 50px;
	}
	.how__amount>button{
		background-color: #f7f7f7;
	}
	.right__amount{
		width: 80px;
		text-align: center;
		font-size: 18px;
		line-height: 50px;
		border: 1px solid #ccc;
	}
	.buy__now{
		margin-top: 50px;
	}
	.buy__now>button{
		font-size: 20px;
		width: 250px;
		height: 50px;
	}
	/* 主体内容左边样式结束 */
	
	.phone__details__footer{
		background-color: #f4f4f4;
		height: auto!important;
		padding: 50px 0;
	}
	.phone__details__footer .phone__details__footer__contain{
		width: 80%;
		margin: 0 auto;
	}
	.phone__details__footer__title{
		padding: 30px 0;
		font-size: 30px;
		color: #333;
	}
	.back__top{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #fff;
		text-align: center;
		position: fixed;
		right: 20px;
		bottom: 50px;
		cursor: pointer;
		box-shadow: 0 0 10px #ccc;
		opacity: 0;
	}
	.back__top.backActive{
		animation: fade 0.7s;
		animation-fill-mode: forwards;
	}
	.back__top>i{
		font-size: 40px;
		color: #409EFF;
		line-height: 50px;
	}
	
	.main__footer{}
	/* 淡入动画 */
	@keyframes fade{
		from{opacity: 0;}
		to{opacity: 1;}
	}
</style>

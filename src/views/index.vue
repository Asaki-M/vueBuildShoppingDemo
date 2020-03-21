<template>
  <div class="index">
	<div class="topbar-menu">
		<a href="#/">
			<div class="menu-left">
				<img src="../assets/img/logo.png" alt="this is logo">
			</div>
		</a>
		<ul class="menu">
			<li @click="moveToPos(907)">手机</li>
			<li @click="moveToPos(2077)">家电</li>
			<li @click="moveToPos(3248)">配件</li>
			<li @click="moveToPos(4341)">服务</li>
		</ul>
		<div class="menu-right">
			<el-input
			    placeholder="请输入内容"
			    prefix-icon="el-icon-search"
				class="search">
			</el-input>
			<div class="icon">
				<router-link to="/user"><span class="el-icon-user"></span></router-link>
				<router-link to="/buycar">
					<span class="el-icon-shopping-cart-full"></span>	
				</router-link>
			</div>
		</div>
	</div>
	<rotation :imgList="imgUrlList"></rotation>
	<div class="hr"></div>
	<div class="phone_content">
		<content-layout :list_data="phone"></content-layout>
	</div>
	<div class="hr"></div>
	<div class="furniture_content">
		<content-layout :list_data="furniture"></content-layout>
	</div>
	<div class="hr"></div>
	<div class="parts_content">
		<content-layout :list_data="parts"></content-layout>
	</div>
	<div class="hr"></div>
	<div class="server_content">
		<server-layout></server-layout>
	</div>
	<index-footer></index-footer>
	<div class="float_window_content animated fadeIn" ref="floatWin" v-show="(sTop>=winHeight)">
		<float-window @movefunc="moveToPos"></float-window>	
	</div>
  </div>
</template>
<script>
	// 导入js动画库
	import TWEEN from '@tweenjs/tween.js'
	// 导入css动画库
	import 'animate.css/animate.min.css'
	import Rotate from '../components/rotate.vue'
	import FloatWindow from '../components/floatWindow.vue'
	import Layout from '../components/layout.vue'
	import ServerLayout from '../components/server.vue'
	import Footer from '../components/footer.vue'
	import DataList from '../store/dataList.js'
	export default{
		name:"index",
		data(){
			return {
				bodyheight:0,
				winHeight:0,
				sTop:0,
				imgUrlList:['http://139.9.60.105/img/1.jpg','http://139.9.60.105/img/2.jpg','http://139.9.60.105/img/3.jpg','http://139.9.60.105/img/4.jpg','http://139.9.60.105/img/5.jpg','http://139.9.60.105/img/6.jpg'],
				phone:[],
				furniture:[],
				parts:[]
			}
		},
		created() {
			this.phone = DataList.phone
			this.furniture = DataList.furniture
			this.parts = DataList.parts
			this.winHeight = document.documentElement.clientHeight 
			this.bodyheight = document.body.clientHeight
		},
		mounted(){
			this.tweenUpdate()
			window.addEventListener('scroll', this.getScrollTop, true)
		},
		methods:{
			getScrollTop() {
				let top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop)
				this.sTop = top
				let bottom = parseInt(this.winHeight*0.65)
				if (this.bodyheight < 5209) {
					this.$refs.floatWin.style.top = (top+bottom-200) + 'px'
				}
			},
			moveToPos(pos) {
				this.setScroll(pos)
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
		},
		components:{
			'rotation':Rotate,
			'content-layout':Layout,
			'server-layout':ServerLayout,
			'float-window':FloatWindow,
			'index-footer':Footer
		}
	}
</script>
<style scoped="scoped">
	@import url("../assets/index.css");
</style>

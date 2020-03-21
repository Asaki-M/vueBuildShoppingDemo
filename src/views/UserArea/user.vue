<template>
	<div class="user">
		<header class="head">
			<area-topbar></area-topbar>
		</header>
		<main>
			<article class="user_left_menu">
				<ul class="user_menu">
					<i class="el-icon-tickets"></i>
					<span>订单中心</span>
					<router-link to="/order" tag="a">
						<li class="user_menu_item">我的订单</li>
					</router-link>
				</ul>
				<ul class="user_menu">
					<i class="el-icon-user"></i>
					<span>个人中心</span>
					<router-link to="/address" tag="a">
						<li class="user_menu_item">地址管理</li>
					</router-link>
					<router-link to="/collection" tag="a">
						<li class="user_menu_item">我的收藏</li>
					</router-link>
					<router-link to="/advice" tag="a">
						<li class="user_menu_item">建议反馈</li>
					</router-link>
				</ul>
				<ul class="user_menu">
					<i class="el-icon-bank-card"></i>
					<span>资产中心</span>
					<router-link to="/discount" tag="a">
						<li class="user_menu_item">我的优惠券</li>
					</router-link>
				</ul>
				<ul class="user_menu">
					<i class="el-icon-service"></i>
					<span>服务中心</span>
					<router-link to="/replacement" tag="a">
						<li class="user_menu_item">退款/退换货跟踪</li>
					</router-link>
				</ul>
			</article>
			<aside>
				<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp" mode="out-in">
					<router-view></router-view>
				</transition>
			</aside>
		</main>
		<footer>
			<tail></tail>
		</footer>
	</div>
</template>

<script>
	
	import Area_topbar from '../area_topbar.vue'
	import Tail from '../../components/footer.vue'

	export default {
		data(){
			return {
				
			}
		},
		components:{
			'area-topbar': Area_topbar,
			'tail': Tail
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/user_area.css");
</style>

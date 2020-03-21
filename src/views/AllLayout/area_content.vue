<template>
	<div class="area__container">
		<header class="head">
			<area-header></area-header>
		</header>
		<router-view></router-view>
		<footer class="foot">
			<area-footer></area-footer>
		</footer>
	</div>	
</template>

<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	import Area__header from '../area_topbar.vue'
	import Area__footer from '../../components/footer.vue'
	export default{
		data() {
			return {
			}
		},
		components:{
			'area-header':Area__header,
			'area-footer':Area__footer
		}
	}
</script>

<style scoped="scoped">
	.head{
		height: 72px;
		margin-bottom: 0;
	}
	
	.foot{
		margin-top: 0;
	}
</style>

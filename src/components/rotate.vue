<template>
	<div>
		<el-carousel arrow="never" ref="carousel" height="100vh" class="index__rotate">
			<el-carousel-item v-for="(item, index) in imgUrlList" :key="index">
			  <img :src="item" class="img-rotate"/>
			</el-carousel-item>
		</el-carousel>		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgUrlList:[]
			}
		},
		props:['imgList'],
		created() {
			this.imgUrlList = this.imgList
		}
	}
</script>

<style scoped="scoped">
	.img-rotate{
		width: 100%;
		height: 100%;
	}
</style>

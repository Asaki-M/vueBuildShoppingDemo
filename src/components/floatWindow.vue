<template>
	<ul class="float_window">
		<li @click="moveToPos(0)">Top</li>
		<li @click="moveToPos(907)"><i class="el-icon-mobile-phone"></i>手机</li>
		<li @click="moveToPos(2077)"><i class="el-icon-monitor"></i>家电</li>
		<li @click="moveToPos(3248)"><i class="el-icon-headset"></i>配件</li>
		<li @click="moveToPos(4341)"><i class="el-icon-chat-dot-round"></i>服务</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {		
			}
		},
		methods:{
			moveToPos(pos){
				this.$emit('movefunc',pos)
			}
		}
	}
</script>

<style scoped="scoped">
	.float_window{
		width: 80px;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 30px;
		box-shadow: 0 0 15px #ccc;
	}
	.float_window li {
		width: 80px;
		height: 50px;
		list-style: none;
		text-align: center;
		padding: 10px 0px;
		font-size: 18px;
		cursor: pointer;
		color: #409EFF;
		line-height: 30px;
	}
	.float_window li i{
		padding-right: 5px;
	}
	.float_window li:nth-child(2),
	.float_window li:nth-child(4){
		border-top: 1px dotted #183D2F;
		border-bottom: 1px dotted #183D2F;
	}
	.float_window li:first-of-type{
		font-size: 24px;
	}
	.float_window li:first-of-type:hover{
		border-top-right-radius: 30px;
		border-top-left-radius: 30px;
	}
	.float_window li:last-of-type:hover{
		border-bottom-right-radius: 30px;
		border-bottom-left-radius: 30px;
	}
	.float_window li:hover{
		background-color: #D0EEFF;
		transition: background-color 0.5s; 
	}
</style>

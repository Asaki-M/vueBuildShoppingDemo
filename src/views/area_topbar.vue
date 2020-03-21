<template>
	<div class="topbar-menu">
		<a href="#/"><div class="menu-left"></div></a>
		<ul class="menu">
			<router-link to="/phoneSpecialArea?type=phone" tag="a">
				<li>手机</li>
			</router-link>
			<router-link to="/furnitureSpecialArea?type=furniture" tag="a">
				<li>家电</li>
			</router-link>
			<router-link to="/partsSpecialArea?type=parts" tag="a">
				<li>配件</li>
			</router-link>
		</ul>
		<div class="menu-right">
			<el-input
			    placeholder="请输入内容"
			    prefix-icon="el-icon-search"
				class="search">
			</el-input>
			<div class="icon">
				<router-link to="/user"><span class="el-icon-user"></span></router-link>
				<router-link to="/buycar"><span class="el-icon-shopping-cart-full"></span></router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.topbar-menu {
		width: 100%;
		height: 71px;
		display: flex;
		justify-content: space-around;
		background-color: transparent;
		border-bottom: 1px solid #ccc;
	}
	.topbar-menu .menu-left{
		width: 150px;
		height: 71px;
		background: url('../assets/img/logo.png') no-repeat content-box;
	}
	.topbar-menu .menu{
		list-style: none;
		display: flex;
	}
	.topbar-menu .menu a {
		padding: 0 30px;
		line-height: 71px;
		color: #fff;
		font-size: 20px;
		text-decoration: none;
	}
	.topbar-menu .menu a:hover {
		color: orangered;
		text-decoration: underline;
	}
	.topbar-menu .menu-right{
		position: relative;
		height: 71px;
		padding-top: 15px;
	}
	.topbar-menu .menu-right .search{
		width: 75%;	
		cursor: pointer;
	}
	.topbar-menu .menu-right .icon{
		float: right;
		text-align: center;
		height: 40px;
		padding-top: 10px;
		cursor: pointer;
	}
	.topbar-menu .menu-right .icon span{
		font-size: 26px;
		color: #fff;
	}
	.topbar-menu .menu-right .icon span:hover{
		color: orangered;
	}
</style>

<template>
	<el-form label-width="100px" :label-position="'right'" class="address-form">
		<el-form-item label="收货人姓名">
			<el-input  placeholder="请输入收货人姓名" v-model="form.self_name"></el-input>
		</el-form-item>
		<el-form-item label="收货人手机号">
			<el-input  placeholder="请输入收货人手机" v-model="form.self_tel"></el-input>
		</el-form-item>
		<el-form-item label="收货人地址">
			<el-select  placeholder="请选择收货人的省份" v-model="form.self_province" @change="getPid('shengfen')">
				<el-option v-for="(item,index) in provinceList" :key="index"
					:value ="item.name" :label="item.name">
				</el-option>
			</el-select>
			<el-select  placeholder="请选择收货人的城市" v-model="form.self_city" @change="getPid('chengshi')">
				<el-option v-for="(item,index) in cityList" :key="index"
					:value ="item.name" :label="item.name" @change="getNewTownshipList(item.pid)">
				</el-option>
			</el-select>
			<el-select  placeholder="请选择收货人的县镇" v-model="form.self_township">
				<el-option v-for="(item,index) in townshipList" :key="index"
					:value ="item.name" :label="item.name">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="详细地址">
			<el-input  placeholder="请输入收货人详细地址" v-model="form.self_detailed_address"></el-input>
		</el-form-item>
	</el-form>
</template>

<script>
	import address from '../../assets/city.js'
	export default{
		data(){
			return {
				provinceList:[],
				cityList:[],
				townshipList:[],
				form:{
					self_name:'',
					self_tel:'',
					self_province:'',
					self_city:'',
					self_township:'',
					self_detailed_address:''
				}
			}
		},
		created(){
			this.provinceList = address.province
			this.cityList = address.city
			this.townshipList = address.area
		},
		methods:{
			getPid(datatype){
				if (datatype === 'shengfen') {
					let prov = this.form.self_province
					let newlist = address.province.filter(value => {
						if(value.name === prov) {
							return value
						}
					})
					this.getNewCityList(newlist[0].id)
				} else if(datatype === 'chengshi'){
					let c = this.form.self_city
					let newlist = address.city.filter(value => {
						if(value.name === c) {
							return value
						}
					})
					this.getNewTownshipList(newlist[0].id)
				}
			},
			getNewCityList(id){
				let oldCityList = address.city
				let newCityList = []
				newCityList = oldCityList.filter(value => {return value.pid === id})
				this.cityList = newCityList
			},
			getNewTownshipList(id) {
				let oldTownshipList = address.area
				let newTownshipList = []
				newTownshipList = oldTownshipList.filter(value => {return value.pid === id})
				this.townshipList = newTownshipList
			}
		}
	}
</script>

<style scoped="scoped">
	.address-form{
		width: 59.5%;
		height: auto !important;
	}
</style>

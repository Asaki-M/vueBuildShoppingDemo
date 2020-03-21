<template>
	<div class="advice__contain">		
		<div class="advice__tips">
			<p>
				因质量问题发生的退换货情况，由小米公司承担退换货物流费用，需要您先行垫付，小米公司凭您的付费发票进行报销，报销金额最高上限15 元/单。（笔记本、扫地机器人、无人机、90分金属旅行箱、电饭煲、智米直流变频落地扇，快递费报销最高为30元。）退货用户，我们在货品验收无误后，一周内为您办理退款，在线支付的用户会将款项原路返还退回至您的支付账号中。
			</p>
			<div class="kf">
				<p>如果您的问题急需处理，请咨询我们<br/>全国服务热线或在线客服！</p>
				<p class="kf__time">周一至周日 8:00-20:00</p>
				<p class="kf__tel">400-788-3333</p>
				<el-button type="primary" icon="el-icon-chat-dot-square">在线客服</el-button>
			</div>
		</div>
		<div class="advice__form">
			<el-form v-model="advice_form" label-width="200px" label-position="top">
				<el-form-item label="您想对哪方面提出建议">
					<el-select v-model="advice_form.classification" placeholder="请选择问题分类">
						<el-option
						  v-for="item in options"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="请描述你的问题">
					<el-input type="textarea" v-model="advice_form.desc"></el-input>
				</el-form-item>
				<el-form-item label="邮箱(选填)">
					<el-input v-model="advice_form.email"></el-input>
				</el-form-item>
			</el-form>
			<el-button type="primary" class="advice_btn">保存</el-button>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
			return {
				options:[{
					label:'1',
					value:'1' 
				},{
					label:'2',
					value:'2'
				},{
					label:'3',
					value:'3'
				}],
				advice_form: {
					classification: '',
					desc: '',
					email:''
				}
			}
	    }
	}
</script>

<style scoped="scoped">
	.advice__contain{
		box-shadow: 0 0 10px #ccc;
		padding: 20px 10px;
		border-radius: 10px;
	}
	.advice__tips{
		width: 100%;
		background-color: #F5F5F5;
		display: flex;
		padding: 40px 30px;
	}
	.advice__tips p{
		width: 60%;
		font-size: 18px;
	}
	.advice__tips .kf{
		width: 40%;
		text-align: center;
	}
	.advice__tips .kf p{
		width: 100%;
	}
	.advice__tips .kf .kf__time{
		color: #B1AFC1;
		font-size: 14px;
	}
	.advice__tips .kf .kf__tel{
		color: #409EFF;
		font-size: 24px;
	}
	.advice__form{
		width: 60%;
	}
	.advice_btn{
		width: 150px;
		font-size: 16px;
	}
</style>

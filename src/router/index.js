import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Buycar from '../views/Buycar/buycar.vue'
import User from '../views/UserArea/user.vue'
import Mz16sPro from '../views/DetailsLayout/phone_details_layout.vue'
import My_order from '../views/UserArea/my_order.vue'
import Address  from '../views/UserArea/address.vue'
import Replacement from '../views/UserArea/replacement.vue'
import Collection from '../views/UserArea/collection.vue'
import Discount from '../views/UserArea/discount.vue'
import Advice from '../views/UserArea/advice.vue'
import AreaLayout from '../views/AllLayout/area_content.vue'
import SpecialLayout from '../views/AllLayout/area__contents.vue'

import datalist from '../store/dataList.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/buycar',
    name: 'buycar',
    component: Buycar
  },
  {
    path: '/user',
    name: 'user',
    component: User,
	children:[
		{ path: '/',redirect: '/order'},
		{ path: '/order', component: My_order },
		{ path: '/address', component: Address },
		{ path: '/replacement', component: Replacement },
		{ path: '/collection', component: Collection },
		{ path: '/discount', component: Discount },
		{ path: '/advice', component: Advice }
	]
  },
  {
    path: '/mz16spro',
    name: 'mz16s',
    component: Mz16sPro
  },
  {
	  path: '/specialArea',
	  name: 'specialArea',
	  component: AreaLayout,
	  children: [
		  {
			  path: '/', redirect: '/phoneSpecialArea'
		  },
		  {
		    path: '/phoneSpecialArea',
		    name: 'phoneSpecialArea',
		    component: SpecialLayout,
			params:{
				data:datalist.phoneList
			}
		  },
		  {
		    path: '/furnitureSpecialArea',
		    name: 'furnitureSpecialArea',
		    component: SpecialLayout,
			params:{
				data:datalist.furnitureList
			}
		  },
		  {
		    path: '/partsSpecialArea',
		    name: 'partsSpecialArea',
		    component: SpecialLayout,
			params:{
				data:datalist.partsList
			}
		  },
	  ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

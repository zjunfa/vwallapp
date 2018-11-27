import vueRouter from 'vue-router'
import header from '../../components/nav/header.vue'
import classify from '../../components/index/classify.vue'
import find from '../../components/index/find.vue'
import commodity from '../../components/index/commodity.vue'
import my from '../../components/index/my.vue'
import groom from '../../components/index/groom.vue'
import huawei from '../../components/index/huawei.vue'
import glory from '../../components/index/glory.vue'
import news from '../../components/index/news.vue'
import cipher from '../../components/index/cipher.vue'
import login from '../../components/login/login-in.vue'
import messagelogin from '../../components/login/message-login.vue'
import foot from '../../components/nav/foot.vue'


export default new vueRouter({
	routes:[
	{
		path:'/foot',
		component:foot,
		children:[
			{
				path:'/header',
				component:header,
				children:[
				{
					path:'/groom',
					component:groom
				},
				{
					path:'/huawei',
					component:huawei
				},
				{
					path:'/glory',
					component:glory
				}
				]
			},
			{
				path:'/classify',component:classify
			},
			{
				path:'/find',component:find
			},
			{
				path:'/commodity',component:commodity
			},
				{
					path:'/my',component:my
				}
			]
	},
	{
		path:'/news',component:news
	},
	{
		path:'/cipher',component:cipher
	},
	{
		path:'/login',component:login
	},
	{
		path:'/message-login',component:messagelogin
	},
	{
		path:"/*",redirect:"/groom"
		
	}
	
	]
})
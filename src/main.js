import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	let val = (value/1).toFixed(2)
    return 'US$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

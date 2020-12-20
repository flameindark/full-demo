import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DataV from '@jiaminghi/data-view'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

import '@/assets/style/_reset.scss'

Vue.use(DataV)

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

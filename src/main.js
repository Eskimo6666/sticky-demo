import Vue from 'vue'
import App from './App.vue'
import { Sticky } from 'vant';
import { IndexBar,IndexAnchor } from 'vant';

Vue.config.productionTip = false

Vue.use(Sticky).use(IndexAnchor).use(IndexBar)

new Vue({
  render: h => h(App),
}).$mount('#app')


import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import Colorize from "@/directives/colorize";
Vue.directive("colorize", Colorize);

Vue.config.productionTip = false
import mixin from "@/mixins/numbersMixins";
Vue.mixin(mixin);

new Vue({
  render: h => h(App),
}).$mount('#app')

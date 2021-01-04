import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { RestDataSource } from "./restDataSource";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  provide: function () {
    return {
      eventBus: new Vue(),
      restoreDataSource: new RestDataSource()
    }
  }
}).$mount('#app')

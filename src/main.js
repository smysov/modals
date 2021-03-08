import Vuelidate from 'vuelidate';
import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

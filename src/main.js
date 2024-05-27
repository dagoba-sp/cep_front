import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Importar o Vuex Store

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Adicionar o Vuex Store
  render: h => h(App),
}).$mount('#app');

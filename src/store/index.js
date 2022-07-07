import Vue from "vue";
import Vuex from "vuex";
import productsModule from './modules/productsModule'
import cartModule from './modules/cartModule'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {productsModule, cartModule},
});

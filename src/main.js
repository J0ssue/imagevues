import Vue from "vue";
import App from "./App";
// * no need to specify ./store/index whenever we have a file index.js webpack assumes that we want to import that file
import store from "./store";

new Vue({
  store, // * second step to setup vuex
  render: h => h(App)
}).$mount("#app");

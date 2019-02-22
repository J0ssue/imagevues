import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
// * no need to specify ./store/index whenever we have a file index.js webpack assumes that we want to import that file
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

//?-----------------------------------
//? ROUTER CONFIG:

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadForm
    },
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
});

//?-------------------------------------

new Vue({
  router,
  store, // * second step to setup vuex
  render: h => h(App)
}).$mount('#app');

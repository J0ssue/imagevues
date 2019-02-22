import Vuex from 'vuex'; // Get vuex
import Vue from 'vue'; // Get vue
import auth from './modules/auth';
import images from './modules/images';

Vue.use(Vuex); //? makes use of vuex
// ?first step to setup vuex

// ? creates store which will contain modules with data.
export default new Vuex.Store({
  modules: {
    auth,
    images
  }
});

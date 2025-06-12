import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import modules from './modules';
import persistenceConfig from './persistence.config';

export default createStore({
  modules,
  plugins: [
    createPersistedState(persistenceConfig),
  ]
});

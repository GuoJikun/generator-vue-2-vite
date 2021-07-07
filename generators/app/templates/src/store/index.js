import Vue from "vue";
import Vuex from "vuex";

// modules
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
import plugins from "./plugins.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins,
});

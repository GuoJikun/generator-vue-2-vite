import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

new Vue({
    router,
    store,
    components: { App },
    render: (h) => {
        return h("App");
    },
}).$mount("#app");

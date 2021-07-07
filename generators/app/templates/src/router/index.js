import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";

Vue.use(Router);

const route = new Router({
    routes: [
        {
            name: "Home",
            path: "/",
            component: Home,
            meta: {
                title: "Home",
            },
        },
        {
            name: "about",
            path: "/about",
            component: () =>
                import(/* webpackChunkName: "about" */ "@/views/about.vue"),
            meta: {
                title: "About",
            },
        },
    ],
});

route.afterEach((to) => {
    document.title = to.meta.title;
});

export default route;

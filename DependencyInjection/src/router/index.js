import Vue from "vue";
import VueRouter from "vue-router";
import BasicRouters from "@/router/basicRouters";
import SideBySideRouters from "@/router/sideBySideRouters";
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        ...BasicRouters,
        SideBySideRouters,
        {
            path: "*",
            redirect: "/products"
        }
    ]
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.path === "/preferences" && from.path.startsWith("/named")) {
        next(false);
    } else {
        next();
    }
})
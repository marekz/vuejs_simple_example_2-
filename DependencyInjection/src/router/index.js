import Vue from "vue";
import VueRouter from "vue-router";
// import ProductDisplay from "@/components/ProductDisplay";
// import ProductEditor from "@/components/ProductEditor";
// import Preferences from "@/components/Preferences";
// import Products from "@/components/Products";
// import SideBySide from "@/components/SideBySide";
import BasicRouters from "@/router/basicRouters";
import SideBySideRouters from "@/router/sideBySideRouters";
Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    routes: [
        ...BasicRouters,
        SideBySideRouters,
    ]
})

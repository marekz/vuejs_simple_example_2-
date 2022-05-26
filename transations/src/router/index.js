import Vue from "vue";
import VueRouter from "vue-router";
import SimpleDisplay from "@/components/SimpleDisplay";
import ListMaker from "@/components/ListMaker";
import Numbers from "@/components/NumbersItem";
Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/display", component: SimpleDisplay },
        { path: "/list", component: ListMaker },
        { path: "/numbers", component: Numbers },
        { path: "*", redirect: "/display" },
    ]
})
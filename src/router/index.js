import Vue from "vue";
import VueRouter from "vue-router";
import Results from "../views/Results.vue";
import Search from "../views/Search.vue";
import Process from "../views/Process.vue";

Vue.use(VueRouter);

const routes = [  
  {
    path: "/process",
    name: "Processing",
    component: Process,
    props: true
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
    props: true
  },
  {
    path: "/",
    name: "Search",
    component: Search
  }
];

const router = new VueRouter({
  routes
});

export default router;

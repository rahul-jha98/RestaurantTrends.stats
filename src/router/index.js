import Vue from "vue";
import VueRouter from "vue-router";
import Results from "../views/Results.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [  
  {
    path: "/results",
    name: "Results",
    component: Results
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

import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import TablaMultiplicar from "./components/TablaMultiplicar";

const myRoutes = [
  { path: "/", component: HelloWorld },
  { path: "/tablamultiplicar/:numero", component: TablaMultiplicar },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;

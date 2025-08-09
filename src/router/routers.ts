import { createRouter, createWebHistory } from "vue-router";
import homePage from "../views/homePage.vue";
import StadisticsPage from "../views/StadisticsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homePage,
    },
    {
        path:"/stadistics",
        component: StadisticsPage,
    }
  ],
});

export default router;